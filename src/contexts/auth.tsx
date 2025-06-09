import React, { createContext, useContext, useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import { AuthService, User } from '../services/auth.service';

interface AuthContextData {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const { user } = await AuthService.login(email, password);
      setUser(user);

      Toast.show({
        type: 'success',
        text1: 'Login realizado com sucesso',
        text2: `Bem-vindo(a), ${user.name}!`,
        position: 'top',
        visibilityTime: 4000,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro na autenticação',
        text2: error instanceof Error ? error.message : 'Erro ao fazer login',
        position: 'top',
        visibilityTime: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setIsLoading(true);
      await AuthService.logout();
      setUser(null);

      Toast.show({
        type: 'info',
        text1: 'Logout realizado',
        position: 'top',
        visibilityTime: 2000,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao fazer logout',
        text2: error instanceof Error ? error.message : 'Tente novamente mais tarde',
        position: 'top',
        visibilityTime: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    AuthService.getStoredUser().then(storedUser => {
      if (storedUser) setUser(storedUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
