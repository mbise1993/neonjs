import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'inversify';
import { NeonProvider } from '@neonjs/react';

import { App } from './App';
import { TodoListPresenter } from './presentation/todoListPresenter';

const container = new Container({
  skipBaseClassChecks: true,
});

container.bind(TodoListPresenter).toSelf().inSingletonScope();

ReactDOM.render(
  <React.StrictMode>
    <NeonProvider container={container}>
      <App />
    </NeonProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
