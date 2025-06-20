import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleTheme: () => set((state) => ({isDarkMode: !state.isDarkMode})),
    }),
    {
      name: '@theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
); 