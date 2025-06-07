import React from 'react';
import { Appearance } from 'react-native';
import { GluestackUIProvider as GluestackUIProviderBase } from '@gluestack-ui/themed';
import { config } from './config';

export function GluestackUIProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = Appearance.getColorScheme() || 'light';

  return (
    <GluestackUIProviderBase config={config} colorMode={colorScheme}>
      {children}
    </GluestackUIProviderBase>
  );
}
