import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextInput, HelperText } from 'react-native-paper';
import { useSelector } from 'react-redux';
import ScreenTemplate from '@/components/common/ScreenTemplate';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { loginThunk } from '@/store/thunks/authThunks';
import { RootState } from '@/store/store';

type FormValues = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { email: '', password: '' },
  });

  // ✅ Fixed: was just console.log — now actually dispatches the login thunk
  const onSubmit = async (values: FormValues) => {
    try {
      console.log('[LOGIN] Attempting login with:', values.email);
      await dispatch(loginThunk(values.email, values.password));
      console.log('[LOGIN] Success!');
    } catch (err: any) {
      // Log full error details so we can see exactly what's failing
      console.log('[LOGIN] Error:', JSON.stringify({
        message: err?.message,
        status: err?.response?.status,
        data: err?.response?.data,
        code: err?.code,        // ECONNREFUSED = backend not reachable
        url: err?.config?.url,  // shows the actual URL being hit
        baseURL: err?.config?.baseURL,
      }, null, 2));

      let message = 'Something went wrong.';
      if (err?.code === 'ECONNREFUSED' || err?.code === 'ERR_NETWORK') {
        message = 'Cannot reach server.\n\nCheck:\n• Backend is running\n• EXPO_PUBLIC_API_BASE_URL uses your machine IP not localhost';
      } else if (err?.response?.status === 401) {
        message = 'Wrong email or password.';
      } else if (err?.response?.status === 403) {
        message = 'Email not verified.\nRun the create-test-user script again.';
      } else if (err?.response?.data?.message) {
        message = err.response.data.message;
      }

      Alert.alert('Login failed', message);
    }
  };

  return (
    <View style={styles.container}>
      <ScreenTemplate title="Login" subtitle="Secure JWT-based login" />
      <View style={styles.form}>
        <Controller
          control={control}
          name="email"
          rules={{ required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Enter a valid email' } }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                label="Email"
                value={value}
                onChangeText={onChange}
                autoCapitalize="none"
                keyboardType="email-address"
                error={!!errors.email}
              />
              <HelperText type="error" visible={!!errors.email}>
                {errors.email?.message}
              </HelperText>
            </>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: 'Password is required' }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                label="Password"
                value={value}
                onChangeText={onChange}
                secureTextEntry
                error={!!errors.password}
              />
              <HelperText type="error" visible={!!errors.password}>
                {errors.password?.message}
              </HelperText>
            </>
          )}
        />

        <Button
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          loading={loading}
          disabled={loading}
          style={styles.button}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  form: { padding: 16, gap: 4 },
  button: { marginTop: 8 },
});

export default LoginScreen;
