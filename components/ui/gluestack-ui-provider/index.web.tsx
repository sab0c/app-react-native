'use client';
import React from 'react';
import { GluestackUIProvider as GluestackUIProviderBase } from '@gluestack-ui/themed';
import { config } from './config';

export function GluestackUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <GluestackUIProviderBase config={config}>
      {children}
    </GluestackUIProviderBase>
  );
}
