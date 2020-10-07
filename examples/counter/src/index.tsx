import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'inversify';
import { NeonProvider } from '@neonjs/react';

import { CounterPresenter } from './presentation/counterPresenter';

import { App } from './App';

const container = new Container({
  skipBaseClassChecks: true,
});

container.bind(CounterPresenter).toSelf().inSingletonScope();

ReactDOM.render(
  <React.StrictMode>
    <NeonProvider container={container}>
      <App />
    </NeonProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
