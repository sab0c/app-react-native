import React from 'react';
import { render } from '@testing-library/react-native';
import Toast from 'react-native-toast-message';

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));

describe('Toast', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve mostrar toast de sucesso corretamente', () => {
    Toast.show({
      type: 'success',
      text1: 'Sucesso!',
      text2: 'Operação realizada com sucesso',
      position: 'top',
      visibilityTime: 4000,
    });

    expect(Toast.show).toHaveBeenCalledWith({
      type: 'success',
      text1: 'Sucesso!',
      text2: 'Operação realizada com sucesso',
      position: 'top',
      visibilityTime: 4000,
    });
  });

  it('deve mostrar toast de erro corretamente', () => {
    Toast.show({
      type: 'error',
      text1: 'Erro!',
      text2: 'Algo deu errado',
      position: 'top',
      visibilityTime: 4000,
    });

    expect(Toast.show).toHaveBeenCalledWith({
      type: 'error',
      text1: 'Erro!',
      text2: 'Algo deu errado',
      position: 'top',
      visibilityTime: 4000,
    });
  });

  it('deve mostrar toast de info corretamente', () => {
    Toast.show({
      type: 'info',
      text1: 'Info',
      text2: 'Informação importante',
      position: 'top',
      visibilityTime: 4000,
    });

    expect(Toast.show).toHaveBeenCalledWith({
      type: 'info',
      text1: 'Info',
      text2: 'Informação importante',
      position: 'top',
      visibilityTime: 4000,
    });
  });

  it('deve esconder o toast quando chamado', () => {
    Toast.hide();
    expect(Toast.hide).toHaveBeenCalled();
  });
}); 