import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const baseURL = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';

const api = axios.create({
  baseURL
});

const encodeBase64 = (str: string) => {
  try {
    return btoa(str);
  } catch (error) {
    return str;
  }
};

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@Auth:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.get(`/users?email=${email}`);
    const user = response.data[0];

    if (!user || user.password !== password) {
      throw new Error('Email ou senha incorretos');
    }

    const { password: _, ...userWithoutPassword } = user;

    const token = encodeBase64(`${email}:${password}`);

    return {
      user: userWithoutPassword,
      token
    };
  } catch (error) {
    console.error('Erro no login:', error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Erro ao fazer login');
  }
};

export default api; 