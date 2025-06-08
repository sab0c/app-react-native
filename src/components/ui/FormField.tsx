import {
  FormControl,
  Input,
  InputField,
  Pressable,
  Text
} from '@gluestack-ui/themed';
import React from 'react';
import {Control,Controller} from 'react-hook-form';
import {useAppTheme} from '../../themes';

interface FormFieldProps {
  name: string;
  control: Control<any>;
  errors: any;
  placeholder: string;
  type?: 'text' | 'password' | 'email';
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

export function FormField({
  name,
  control,
  errors,
  placeholder,
  type = 'text',
  rightIcon,
  onRightIconPress,
}: FormFieldProps) {
  const {theme} = useAppTheme();

  return (
    <FormControl isInvalid={!!errors[name]}>
      <Controller
        name={name}
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
              placeholder={placeholder}
              type={type === 'email' ? 'text' : type}
              onChangeText={onChange}
              value={value}
              fontSize={15}
              color={theme.colors.text}
              flex={1}
              textAlignVertical="center"
              paddingLeft={0}
              placeholderTextColor={theme.colors.gray}
              keyboardType={type === 'email' ? 'email-address' : 'default'}
            />
            {rightIcon && (
              <Pressable onPress={onRightIconPress} padding={14}>
                {rightIcon}
              </Pressable>
            )}
          </Input>
        )}
      />
      {errors[name] && (
        <Text color={theme.colors.error} fontSize={13} marginTop={2}>
          {errors[name].message}
        </Text>
      )}
    </FormControl>
  );
} 