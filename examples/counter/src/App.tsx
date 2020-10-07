import React from 'react';

import { Counter } from './ui/Counter';

export const App: React.FC = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center my-4">
        <h1 className="text-primary">NeonJS</h1>
        &nbsp;&nbsp;
        <h1 className="text-muted">Simple Counter</h1>
      </div>

      <Counter />
    </div>
  );
};
