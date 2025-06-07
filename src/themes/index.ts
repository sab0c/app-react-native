import { useThemeStore } from '../stores/theme.store';
import { darkTheme } from './dark';
import { lightTheme } from './light';

export function useAppTheme() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return {
    theme: isDarkMode ? darkTheme : lightTheme,
  };
}
