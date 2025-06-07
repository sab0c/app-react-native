import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthService } from '../../src/services/auth.service';
import { loginUser } from '../../src/services/api';

jest.mock('@react-native-async-storage/async-storage', () => ({
  multiSet: jest.fn(),
  multiRemove: jest.fn(),
  getItem: jest.fn(),
}));

jest.mock('../../src/services/api', () => ({
  loginUser: jest.fn(),
}));

describe('AuthService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('login', () => {
    const mockUser = {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
    };

    const mockToken = 'mock-token';

    it('deve fazer login com sucesso e salvar os dados', async () => {
      const loginResponse = { user: mockUser, token: mockToken };
      (loginUser as jest.Mock).mockResolvedValueOnce(loginResponse);

      const result = await AuthService.login('test@example.com', 'password123');

      expect(result).toEqual(loginResponse);
      expect(loginUser).toHaveBeenCalledWith('test@example.com', 'password123');
      expect(AsyncStorage.multiSet).toHaveBeenCalledWith([
        ['@Auth:user', JSON.stringify(mockUser)],
        ['@Auth:token', mockToken],
      ]);
    });

    it('deve lançar erro quando o login falha', async () => {
      const errorMessage = 'Email ou senha incorretos';
      (loginUser as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

      await expect(AuthService.login('wrong@email.com', 'wrongpass'))
        .rejects
        .toThrow(errorMessage);
      expect(AsyncStorage.multiSet).not.toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('deve remover os dados do usuário do storage', async () => {
      await AuthService.logout();

      expect(AsyncStorage.multiRemove).toHaveBeenCalledWith([
        '@Auth:user',
        '@Auth:token',
      ]);
    });
  });

  describe('getStoredUser', () => {
    it('deve retornar o usuário armazenado', async () => {
      const mockUser = { id: 1, name: 'Test User', email: 'test@example.com' };
      (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(JSON.stringify(mockUser));

      const result = await AuthService.getStoredUser();

      expect(result).toEqual(mockUser);
      expect(AsyncStorage.getItem).toHaveBeenCalledWith('@Auth:user');
    });

    it('deve retornar null quando não há usuário armazenado', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null);

      const result = await AuthService.getStoredUser();

      expect(result).toBeNull();
    });
  });

  describe('getStoredToken', () => {
    it('deve retornar o token armazenado', async () => {
      const mockToken = 'mock-token';
      (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(mockToken);

      const result = await AuthService.getStoredToken();

      expect(result).toBe(mockToken);
      expect(AsyncStorage.getItem).toHaveBeenCalledWith('@Auth:token');
    });
  });
}); 