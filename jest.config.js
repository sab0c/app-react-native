module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|react-native-toast-message|@testing-library|@gluestack-ui|@gluestack-style|@legendapp|react-native-reanimated|react-native-gesture-handler|react-native-safe-area-context|react-native-screens)/)',
  ],
  moduleFileExtensions: ['ts','tsx','js','jsx','json','node'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}','!src/**/*.d.ts'],
  testMatch: ['**/__tests__/**/*.test.{ts,tsx}'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
};
