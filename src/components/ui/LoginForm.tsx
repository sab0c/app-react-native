import {
  Button,
  ButtonText,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  Icon,
  Input,
  InputField,
  Pressable,
  Spinner,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React,{useState} from 'react';
import {Control,Controller} from 'react-hook-form';
import {LoginFormData} from '../../schemas/login.schema';
import {useAppTheme} from '../../themes';
import {useThemeStore} from '@/src/stores/theme.store';

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
      <FormControl isInvalid={!!errors.email}>
        <Controller
          name="email"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              borderWidth={1}
              borderColor={theme.colors.border}
              height={48}
              backgroundColor={theme.colors.inputs}
              borderRadius={24}
              paddingLeft={12}>
              <InputField
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                fontSize={15}
                color={theme.colors.text}
                textAlignVertical="center"
                paddingTop={12}
                placeholderTextColor={theme.colors.gray}
              />
            </Input>
          )}
        />
        {errors.email && (
          <Text color={theme.colors.error} fontSize={13} marginTop={2}>
            {errors.email.message}
          </Text>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors.password}>
        <Controller
          name="password"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              borderWidth={1}
              borderColor={theme.colors.border}
              height={48}
              backgroundColor={theme.colors.inputs}
              borderRadius={24}
              paddingLeft={12}
              flexDirection="row"
              alignItems="center">
              <InputField
                placeholder="Senha"
                type={showPassword ? 'text' : 'password'}
                onChangeText={onChange}
                value={value}
                fontSize={15}
                color={theme.colors.text}
                flex={1}
                textAlignVertical="center"
                paddingLeft={0}
                placeholderTextColor={theme.colors.gray}
              />
              <Pressable onPress={() => setShowPassword(v => !v)} padding={14}>
                <Icon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  width={22}
                  height={22}
                  color={!isDark && showPassword ? theme.colors.white : !isDark ? theme.colors.black : theme.colors.white}
                />
              </Pressable>
            </Input>
          )}
        />
        {errors.password && (
          <Text color={theme.colors.error} fontSize={13} marginTop={2}>
            {errors.password.message}
          </Text>
        )}
      </FormControl>

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
