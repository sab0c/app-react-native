import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useAuth} from '../contexts/auth';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

export default function AppRoutes() {
  const {user} = useAuth();
  
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
