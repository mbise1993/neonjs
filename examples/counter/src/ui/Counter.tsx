import React from 'react';
import { usePresenter } from '@neonjs/react';

import { CounterPresenter } from '../presentation/counterPresenter';

export const Counter: React.FC = () => {
  const presenter = usePresenter(CounterPresenter);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        className="btn btn-sm btn-danger"
        onClick={() => presenter.decrement()}
      >
        Decrement
      </button>
      <h3 className="mx-4">Count: {presenter.count}</h3>
      <button
        className="btn btn-sm btn-success"
        onClick={() => presenter.increment()}
      >
        Increment
      </button>
    </div>
  );
};
