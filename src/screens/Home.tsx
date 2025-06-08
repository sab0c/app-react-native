import {
  Box,
  SafeAreaView,
  ScrollView,
  Text
} from '@gluestack-ui/themed';
import React from 'react';

import ThemeToggleButton from '../components/ui/ThemeToggleButton';
import {useAuth} from '../contexts/auth';
import {useAppTheme} from '../themes';
import {Button} from '../components/ui/Button';

export default function HomeScreen() {
  const {signOut} = useAuth();
  const {theme} = useAppTheme();

  const handleLogout = async () => {
    signOut();
  };

  return (
    <SafeAreaView flex={1} backgroundColor={theme.colors.background}>
      <ScrollView
        flex={1}
        backgroundColor={theme.colors.background}
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
        <Box
          flex={1}
          justifyContent={'flex-start'}
          alignItems={'center'}
          backgroundColor={theme.colors.background}
          padding={24}>
          <Box marginTop={50} marginBottom={32} alignItems={'center'}>
            <Text
              fontSize={32}
              fontWeight={'bold'}
              color={theme.colors.text}
              textAlign={'center'}>
              Olá
            </Text>
          </Box>
          <Box
            padding={16}
            width={'100%'}
            maxWidth={400}
            marginTop={24}
            opacity={0.7}>
            <Button
              onPress={handleLogout}
              title="Sair"
              variant="primary"
            />
          </Box>
        </Box>
      </ScrollView>
      <ThemeToggleButton />
    </SafeAreaView>
  );
}
