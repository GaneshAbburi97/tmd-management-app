import React from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextInput, HelperText } from 'react-native-paper';
import { useSelector } from 'react-redux';
import ScreenTemplate from '@/components/common/ScreenTemplate';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { registerThunk } from '@/store/thunks/authThunks';
import { RootState } from '@/store/store';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

// Password must have uppercase, lowercase, and a digit (matches backend policy)
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

const RegisterScreen = () => {
  const dispatch = useAppDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');

  // ✅ Fixed: was a stub — full register form dispatching registerThunk
  const onSubmit = async (values: FormValues) => {
    try {
      await dispatch(
        registerThunk({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        })
      );
      Alert.alert(
        'Registration successful',
        'Please check your email to verify your account before logging in.'
      );
    } catch {
      Alert.alert('Registration failed', 'Something went wrong. Please try again.');
    }
  };

  return (
    <ScrollView>
      <ScreenTemplate title="Register" subtitle="Create your account" />
      <View style={styles.form}>
        <Controller
          control={control}
          name="firstName"
          rules={{ required: 'First name is required' }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput label="First Name" value={value} onChangeText={onChange} error={!!errors.firstName} />
              <HelperText type="error" visible={!!errors.firstName}>{errors.firstName?.message}</HelperText>
            </>
          )}
        />

        <Controller
          control={control}
          name="lastName"
          rules={{ required: 'Last name is required' }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput label="Last Name" value={value} onChangeText={onChange} error={!!errors.lastName} />
              <HelperText type="error" visible={!!errors.lastName}>{errors.lastName?.message}</HelperText>
            </>
          )}
        />

        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: { value: /\S+@\S+\.\S+/, message: 'Enter a valid email' },
          }}
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
              <HelperText type="error" visible={!!errors.email}>{errors.email?.message}</HelperText>
            </>
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
            pattern: {
              value: PASSWORD_REGEX,
              message: 'Min 8 chars with uppercase, lowercase, and a number',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput label="Password" value={value} onChangeText={onChange} secureTextEntry error={!!errors.password} />
              <HelperText type="error" visible={!!errors.password}>{errors.password?.message}</HelperText>
            </>
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: 'Please confirm your password',
            validate: (val) => val === password || 'Passwords do not match',
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                label="Confirm Password"
                value={value}
                onChangeText={onChange}
                secureTextEntry
                error={!!errors.confirmPassword}
              />
              <HelperText type="error" visible={!!errors.confirmPassword}>
                {errors.confirmPassword?.message}
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
          Create Account
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: { padding: 16, gap: 4 },
  button: { marginTop: 12 },
});

export default RegisterScreen;
