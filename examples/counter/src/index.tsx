import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'inversify';
import { NeonProvider } from '@neonjs/react';

import { Counter } from './Counter';
import { CounterPresenter } from './counterPresenter';

import './index.css';

const container = new Container({
  skipBaseClassChecks: true,
});

container.bind(CounterPresenter).toSelf().inSingletonScope();

ReactDOM.render(
  <React.StrictMode>
    <NeonProvider container={container}>
      <Counter />
    </NeonProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
