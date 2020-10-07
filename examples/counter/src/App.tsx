import React from 'react';

import { Counter } from './ui/Counter';

export const App: React.FC = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center my-4">
        <h2 className="text-primary">NeonJS</h2>
        &nbsp;&nbsp;
        <h2 className="text-muted">Simple Counter</h2>
      </div>

      <Counter />
    </div>
  );
};
