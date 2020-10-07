import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'inversify';
import { NeonProvider } from '@neonjs/react';

import { App } from './App';
import { ContactDetailsPresenter } from './presentation/contactDetailsPresenter';
import { ContactListPresenter } from './presentation/contactListPresenter';
import { ContactService } from './services/contactService';

import './index.css';

const container = new Container({
  skipBaseClassChecks: true,
});

container.bind(ContactService).toSelf().inSingletonScope();
container.bind(ContactListPresenter).toSelf().inSingletonScope();
container.bind(ContactDetailsPresenter).toSelf().inSingletonScope();

ReactDOM.render(
  <React.StrictMode>
    <NeonProvider container={container}>
      <App />
    </NeonProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
