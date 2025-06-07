import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser } from './api';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export class AuthService {
  private static readonly USER_STORAGE_KEY = '@Auth:user';
  private static readonly TOKEN_STORAGE_KEY = '@Auth:token';

  static async login(email: string, password: string): Promise<AuthResponse> {
    const response = await loginUser(email, password);
    
    await this.saveAuthData(response);

    return response;
  }

  static async logout(): Promise<void> {
    await AsyncStorage.multiRemove([
      this.USER_STORAGE_KEY,
      this.TOKEN_STORAGE_KEY
    ]);
  }

  static async getStoredUser(): Promise<User | null> {
    const userStr = await AsyncStorage.getItem(this.USER_STORAGE_KEY);
    return userStr ? JSON.parse(userStr) : null;
  }

  static async getStoredToken(): Promise<string | null> {
    return AsyncStorage.getItem(this.TOKEN_STORAGE_KEY);
  }

  private static async saveAuthData(data: AuthResponse): Promise<void> {
    await AsyncStorage.multiSet([
      [this.USER_STORAGE_KEY, JSON.stringify(data.user)],
      [this.TOKEN_STORAGE_KEY, data.token]
    ]);
  }
} 