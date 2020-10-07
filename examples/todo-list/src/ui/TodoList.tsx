import React from 'react';
import { usePresenter } from '@neonjs/react';

import { TodoItem } from './TodoItem';
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
          <TodoItem
            key={item.id}
            text={item.text}
            isDone={item.isDone}
            onToggleDone={() => presenter.toggleItemDone(item.id)}
            onDeleteClick={() => presenter.deleteItem(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};
