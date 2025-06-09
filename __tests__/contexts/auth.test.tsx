import { renderHook, act } from '@testing-library/react-hooks';
import React from 'react';
import Toast from 'react-native-toast-message';
import { AuthProvider, useAuth } from '../../src/contexts/auth';
import { AuthService } from '../../src/services/auth.service';

jest.mock('../../src/services/auth.service', () => ({
  AuthService: {
    login: jest.fn(),
    logout: jest.fn(),
    getStoredUser: jest.fn().mockResolvedValue(null),
  }
}));

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}));

describe('AuthContext', () => {
  const mockUser = {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
  };

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AuthProvider>{children}</AuthProvider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
    (AuthService.getStoredUser as jest.Mock).mockResolvedValue(null);
  });

  describe('signIn', () => {
    it('deve fazer login com sucesso e mostrar toast', async () => {
      (AuthService.login as jest.Mock).mockResolvedValueOnce({ user: mockUser });
      const { result } = renderHook(() => useAuth(), { wrapper });

      await act(async () => {
        await result.current.signIn('test@example.com', 'password123');
      });

      expect(result.current.user).toEqual(mockUser);
      expect(result.current.isLoading).toBe(false);
      expect(Toast.show).toHaveBeenCalledWith({
        type: 'success',
        text1: 'Login realizado com sucesso',
        text2: `Bem-vindo(a), ${mockUser.name}!`,
        position: 'top',
        visibilityTime: 4000,
      });
    });

    it('deve mostrar toast de erro quando o login falha', async () => {
      const errorMessage = 'Email ou senha incorretos';
      (AuthService.login as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
      const { result } = renderHook(() => useAuth(), { wrapper });

      await act(async () => {
        await result.current.signIn('wrong@email.com', 'wrongpass');
      });

      expect(result.current.user).toBeNull();
      expect(result.current.isLoading).toBe(false);
      expect(Toast.show).toHaveBeenCalledWith({
        type: 'error',
        text1: 'Erro na autenticação',
        text2: errorMessage,
        position: 'top',
        visibilityTime: 4000,
      });
    });

    it('deve atualizar o estado de loading durante o login', async () => {
      (AuthService.login as jest.Mock).mockImplementation(
        () => new Promise(resolve => setTimeout(resolve as () => void, 100))
      );
      const { result } = renderHook(() => useAuth(), { wrapper });

      let promise: Promise<void>;
      await act(async () => {
        promise = result.current.signIn('test@example.com', 'password123');
      });

      expect(result.current.isLoading).toBe(true);

      await act(async () => {
        await promise;
      });

      expect(result.current.isLoading).toBe(false);
    });
  });

  describe('signOut', () => {
    it('deve fazer logout com sucesso e mostrar toast', async () => {
      const { result } = renderHook(() => useAuth(), { wrapper });

      (AuthService.login as jest.Mock).mockResolvedValueOnce({ user: mockUser });
      await act(async () => {
        await result.current.signIn('test@example.com', 'password123');
      });

      await act(async () => {
        await result.current.signOut();
      });

      expect(result.current.user).toBeNull();
      expect(result.current.isLoading).toBe(false);
      expect(Toast.show).toHaveBeenCalledWith({
        type: 'info',
        text1: 'Logout realizado',
        position: 'top',
        visibilityTime: 2000,
      });
    });

    it('deve mostrar toast de erro quando o logout falha', async () => {
      const errorMessage = 'Erro ao fazer logout';
      (AuthService.logout as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));
      const { result } = renderHook(() => useAuth(), { wrapper });

      await act(async () => {
        await result.current.signOut();
      });

      expect(Toast.show).toHaveBeenCalledWith({
        type: 'error',
        text1: 'Erro ao fazer logout',
        text2: errorMessage,
        position: 'top',
        visibilityTime: 4000,
      });
    });
  });

  describe('Inicialização', () => {
    it('deve carregar usuário armazenado ao iniciar', async () => {
      (AuthService.getStoredUser as jest.Mock).mockResolvedValueOnce(mockUser);

      const { result } = renderHook(() => useAuth(), { wrapper });

      await act(() => Promise.resolve());
      expect(result.current.user).toEqual(mockUser);
    });
  });
}); 