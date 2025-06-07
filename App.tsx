import {GluestackUIProvider} from '@gluestack-ui/themed';
import React from 'react';
import Toast from 'react-native-toast-message';
import {AuthProvider} from './src/contexts/auth';
import AppRoutes from './src/routes/AppRoutes';

function App(): React.JSX.Element {

  return (
    <GluestackUIProvider>
      <AuthProvider>
        <AppRoutes />
        <Toast />
      </AuthProvider>
    </GluestackUIProvider>
  );
}

export default App;