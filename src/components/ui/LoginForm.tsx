import {
  Button,
  ButtonText,
  EyeIcon,
  EyeOffIcon,
  Icon,
  Spinner,
  VStack,
} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {Control} from 'react-hook-form';
import {LoginFormData} from '../../schemas/login.schema';
import {useAppTheme} from '../../themes';
import {useThemeStore} from '../../stores/theme.store';
import {FormField} from './FormField';

interface LoginFormProps {
  control: Control<LoginFormData>;
  errors: any;
  onSubmit: () => void;
  isLoading: boolean;
}

export default function LoginForm({
  control,
  errors,
  onSubmit,
  isLoading,
}: LoginFormProps) {
  const {theme} = useAppTheme();
  const isDark = useThemeStore(state => state.isDarkMode);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <VStack gap={24}>
      <FormField
        name="email"
        control={control}
        errors={errors}
        placeholder="E-mail"
        type="email"
      />

      <FormField
        name="password"
        control={control}
        errors={errors}
        placeholder="Senha"
        type={showPassword ? 'text' : 'password'}
        rightIcon={
          <Icon
            as={showPassword ? EyeIcon : EyeOffIcon}
            width={22}
            height={22}
            color={!isDark && showPassword ? theme.colors.white : !isDark ? theme.colors.black : theme.colors.white}
          />
        }
        onRightIconPress={() => setShowPassword(v => !v)}
      />

      <Button
        onPress={onSubmit}
        backgroundColor={theme.colors.gray}
        height={46}
        borderRadius={22}
        marginBottom={4}
        justifyContent="center"
        isDisabled={isLoading}>
        {isLoading ? (
          <Spinner color="#FFFFFF" />
        ) : (
          <ButtonText
            color={theme.colors.background}
            fontSize={16}
            fontWeight="bold"
            textAlign="center"
            width="100%">
            Login
          </ButtonText>
        )}
      </Button>
    </VStack>
  );
}
