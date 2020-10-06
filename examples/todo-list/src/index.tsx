import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'inversify';
import { NeonProvider } from '@neonjs/react';

import { TodoList } from './ui/TodoList';
import { TodoListPresenter } from './presentation/todoListPresenter';

import './index.css';

const container = new Container({
  skipBaseClassChecks: true,
});

container.bind(TodoListPresenter).toSelf().inSingletonScope();

ReactDOM.render(
  <React.StrictMode>
    <NeonProvider container={container}>
      <TodoList />
    </NeonProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
