import {
  Box,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
} from '@gluestack-ui/themed';
import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Platform} from 'react-native';
import LoginForm from '../components/ui/LoginForm';
import ReactLogo from '../components/ui/ReactLogo';
import ThemeToggleButton from '../components/ui/ThemeToggleButton';
import {useAuth} from '../contexts/auth';
import {LoginFormData,loginSchema} from '../schemas/login.schema';
import {useAppTheme} from '../themes';

export default function LoginScreen() {
  const {theme} = useAppTheme();
  const {signIn, isLoading} = useAuth();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    await signIn(data.email, data.password);
  };

  return (
    <SafeAreaView flex={1} backgroundColor={theme.colors.background}>
      <KeyboardAvoidingView
        flex={1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          flex={1}
          backgroundColor={theme.colors.background}
          keyboardShouldPersistTaps="handled"
          contentInsetAdjustmentBehavior="automatic">
          <Box width={'100%'} padding={24} marginTop={100} gap={36}>
            <ReactLogo />

            <Text
              alignSelf={'center'}
              fontSize={24}
              fontWeight={'bold'}
              marginBottom={4}
              color={theme.colors.text}>
              Bem-vindo(a)!
            </Text>

            <Text fontSize={18} color={theme.colors.gray} alignSelf={'center'}>
              Faça login para continuar
            </Text>

            <LoginForm
              control={control}
              errors={errors}
              isLoading={isLoading}
              onSubmit={handleSubmit(onSubmit)}
            />
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
      <ThemeToggleButton />
    </SafeAreaView>
  );
}
