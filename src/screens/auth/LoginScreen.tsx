import React from 'react';
import { View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextInput } from 'react-native-paper';
import ScreenTemplate from '@/components/common/ScreenTemplate';

type FormValues = { email: string; password: string };

const LoginScreen = () => {
  const { control, handleSubmit } = useForm<FormValues>({ defaultValues: { email: '', password: '' } });
  const onSubmit = (values: FormValues) => {
    console.log('Login', values.email);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScreenTemplate title="Login" subtitle="Secure JWT-based login" />
      <View style={{ padding: 16, gap: 12 }}>
        <Controller control={control} name="email" render={({ field: { onChange, value } }) => <TextInput label="Email" value={value} onChangeText={onChange} autoCapitalize="none" />} />
        <Controller control={control} name="password" render={({ field: { onChange, value } }) => <TextInput label="Password" value={value} onChangeText={onChange} secureTextEntry />} />
        <Button mode="contained" onPress={handleSubmit(onSubmit)}>Login</Button>
      </View>
    </View>
  );
};

export default LoginScreen;
