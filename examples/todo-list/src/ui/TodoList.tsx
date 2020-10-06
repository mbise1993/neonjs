import React from 'react';
import { usePresenter } from '@neonjs/react';

import { TodoListPresenter } from '../presentation/todoListPresenter';

export const TodoList: React.FC = () => {
  const presenter = usePresenter(TodoListPresenter);

  return (
    <div className="todo-list">
      <div className="new-item-input-container">
        <input
          className="new-item-input"
          type="text"
          value={presenter.newItemText}
          onChange={(e) => presenter.updateNewItemText(e.target.value)}
        />
        <button
          disabled={presenter.newItemText.length === 0}
          onClick={() => presenter.addNewItem()}
        >
          Add Item
        </button>
      </div>
      <ul className="todo-items-list">
        {presenter.items.map((item) => (
          <li key={item.id} className="todo-item">
            <input
              type="checkbox"
              checked={item.isDone}
              onChange={() => presenter.toggleItemDone(item.id)}
            />
            <span className="todo-item-text">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
