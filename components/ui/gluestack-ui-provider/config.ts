import { createConfig } from '@gluestack-ui/themed';

export const config = createConfig({
  tokens: {
    colors: {
      primary: '#007AFF',
      secondary: '#5856D6',
      tertiary: '#FF2D55',
      error: '#FF3B30',
      warning: '#FF9500',
      success: '#34C759',
      info: '#5856D6',
    },
  },
  aliases: {
    colors: {
      background: 'white',
      text: 'black',
    },
  },
});
