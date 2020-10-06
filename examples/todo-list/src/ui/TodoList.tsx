import React from 'react';
import { usePresenter } from '@neonjs/react';

import { TodoListPresenter } from '../presentation/todoListPresenter';

export const TodoList: React.FC = () => {
  const presenter = usePresenter(TodoListPresenter, { count: 0 });

  return (
    <div className="counter">
      <h2 className="counter-text">Count: {presenter.count}</h2>
      <div className="btn-container">
        <button
          className="counter-btn decrement"
          onClick={() => presenter.decrement()}
        >
          Decrement
        </button>
        <button
          className="counter-btn increment"
          onClick={() => presenter.increment()}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
