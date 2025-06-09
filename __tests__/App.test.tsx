/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';
import { AuthService } from '../src/services/auth.service';

jest.mock('../src/services/auth.service', () => ({
  AuthService: {
    getStoredUser: jest.fn().mockResolvedValue(null),
  }
}));

jest.mock('react-native-toast-message', () => {
  const Toast = () => null;
  Toast.show = jest.fn();
  return Toast;
});

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({ children }: { children: React.ReactNode }) => children,
    Screen: () => null,
  }),
}));

jest.mock('@gluestack-ui/themed', () => ({
  GluestackUIProvider: ({ children }: { children: React.ReactNode }) => children,
  Box: ({ children }: { children: React.ReactNode }) => children,
  Icon: () => null,
  MoonIcon: () => null,
  Pressable: ({ children }: { children: React.ReactNode }) => children,
  SunIcon: () => null,
}));

jest.mock('react-native', () => ({
  NativeModules: {
    DeviceName: {
      getDeviceName: jest.fn().mockResolvedValue('Test Device'),
    },
    OSVersionModule: {
      getOSVersion: jest.fn().mockResolvedValue('Test OS Version'),
    },
  },
  Animated: {
    createAnimatedComponent: (component: any) => component,
    Value: jest.fn(() => ({
      interpolate: jest.fn(() => 0),
    })),
    spring: jest.fn(() => ({
      start: jest.fn(),
    })),
    parallel: jest.fn(() => ({
      start: jest.fn(),
    })),
    sequence: jest.fn(() => ({
      start: jest.fn(),
    })),
    timing: jest.fn(() => ({
      start: jest.fn(),
    })),
  },
  StyleSheet: {
    create: jest.fn(),
  },
  Platform: {
    OS: 'android',
    select: jest.fn(),
  },
  Touchable: {
    Mixin: {
      touchableHandleStartShouldSetResponder: jest.fn(),
      touchableHandleResponderTerminationRequest: jest.fn(),
      touchableHandleResponderGrant: jest.fn(),
      touchableHandleResponderMove: jest.fn(),
      touchableHandleResponderRelease: jest.fn(),
      touchableHandleResponderTerminate: jest.fn(),
    },
  },
}));

jest.mock('react-native-svg', () => ({
  Circle: () => null,
  Ellipse: () => null,
  Svg: ({ children }: { children: React.ReactNode }) => children,
}));

describe('App', () => {
  it('renders correctly', async () => {
    await ReactTestRenderer.act(async () => {
      ReactTestRenderer.create(<App />);
    });
  });
});
