import React from 'react';
import { usePresenter } from '@neonjs/react';

import { CounterPresenter } from './counterPresenter';

export const Counter: React.FC = () => {
  const presenter = usePresenter(CounterPresenter, { count: 0 });

  return (
    <div>
      <span>Count: {presenter.count}</span>
      <button onClick={() => presenter.decrement()}>Decrement</button>
      <button onClick={() => presenter.increment()}>Increment</button>
    </div>
  );
};
