import {z} from 'zod';
import api from '../services/api';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Digite um email válido')
    .refine(
      async (email) => {
        try {
          const response = await api.get(`/users?email=${email}`);
          return response.data.length > 0;
        } catch (error) {
          return false;
        }
      },
      {
        message: 'Email não cadastrado',
      }
    ),
  password: z.string().min(1, 'Senha é obrigatória'),
});

export type LoginFormData = {
  email: string;
  password: string;
}; 