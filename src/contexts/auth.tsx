import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React,{createContext,useContext,useEffect,useState} from 'react';
import {Alert,Platform} from 'react-native';
import Toast from 'react-native-toast-message';
import {AuthService,User} from '../services/auth.service';

interface AuthContextData {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const api = axios.create({
  baseURL: Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000'
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@Auth:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

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
      Alert.alert(
        'Erro na autenticação',
        error instanceof Error ? error.message : 'Erro ao fazer login'
      );
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    AuthService.getStoredUser().then(storedUser => {
      if (storedUser) {
        setUser(storedUser);
      }
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

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.get(`/users?email=${email}`);
    const user = response.data[0];
    return user;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw error;
  }
}; 