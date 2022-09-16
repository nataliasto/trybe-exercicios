import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Testando a App.js', () => {
  test('Verificando se o label e o input existem no documento', () => {
    render(<App />);
    const labelTask = screen.getByText('Tarefa:');
    const inputTask = screen.getByLabelText('Tarefa:');

    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    expect(inputTask.type).toBe('text');
  });
  test('Verificando se existe o botão "Adicionar"', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Adicionar');
  });
  test('Verificando se, ao clicar no botão, a tarefa digitada é salva', () => {
    render(<App />);
    const TODO = 'Acordar às 8h';
    const inputTask = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button');
    userEvent.type(inputTask, TODO);
    userEvent.click(button);

    expect(inputTask).toHaveValue('');
    expect(screen.queryByText(TODO)).toBeInTheDocument();
  });
  test('Verificando se cada tarefa adicionada é mostrada na tela', () => {
    const listTodo = ['Acordar às 8h', 'Praticar exercícios', 'Beber água'];

    render(<App />);

    const inputTask = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button');

    listTodo.forEach((todo) => {
      userEvent.type(inputTask, todo);
      userEvent.click(button);
    });

    listTodo.forEach((todo) => {
      expect(screen.queryByText(todo)).toBeInTheDocument();
    });
  });
  test('Verifica se ao passar uma string para o componente Item, aparece na tela', () => {
    render(<Item content="Beber água" />);
    const todoItem = screen.getByText('Beber água');
    expect(todoItem).toBeInTheDocument();
  });
});
