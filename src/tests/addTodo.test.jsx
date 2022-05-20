import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../App';

describe('Verifica componente na tela', () => {
  it('se renderiza input', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Sua tarefa');
    expect(input).toBeInTheDocument();
  });

  it('se renderiza botão de adicionar nova tarefa', () => {
    render(<App />);
    const btnText = screen.getByRole('button', { name: 'Add Todo' });
    expect(btnText).toBeInTheDocument();
  });
});
