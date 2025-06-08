import React from 'react';
import {
  Button as GlueButton,
  ButtonText,
  Spinner,
} from '@gluestack-ui/themed';
import {useAppTheme} from '../../themes';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  onPress,
  title,
  variant = 'primary',
  isLoading = false,
  isDisabled = false,
  size = 'md',
}: ButtonProps) {
  const {theme} = useAppTheme();

  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.colors.gray,
          color: theme.colors.background,
        };
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: theme.colors.gray,
          color: theme.colors.text,
        };
      case 'danger':
        return {
          backgroundColor: theme.colors.error,
          color: theme.colors.white,
        };
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case 'sm':
        return {height: 36, fontSize: 14};
      case 'md':
        return {height: 46, fontSize: 16};
      case 'lg':
        return {height: 56, fontSize: 18};
    }
  };

  const buttonStyle = getButtonStyle();
  const buttonSize = getButtonSize();

  return (
    <GlueButton
      onPress={onPress}
      backgroundColor={buttonStyle.backgroundColor}
      borderWidth={buttonStyle.borderWidth}
      borderColor={buttonStyle.borderColor}
      height={buttonSize.height}
      borderRadius={buttonSize.height / 2}
      marginBottom={4}
      justifyContent="center"
      isDisabled={isDisabled || isLoading}>
      {isLoading ? (
        <Spinner color="#FFFFFF" />
      ) : (
        <ButtonText
          color={buttonStyle.color}
          fontSize={buttonSize.fontSize}
          fontWeight="bold"
          textAlign="center"
          width="100%">
          {title}
        </ButtonText>
      )}
    </GlueButton>
  );
} 