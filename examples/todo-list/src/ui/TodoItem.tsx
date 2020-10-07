import React from 'react';

interface TodoItemProps {
  text: string;
  isDone: boolean;
  onToggleDone(): void;
  onDeleteClick(): void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  text,
  isDone,
  onToggleDone,
  onDeleteClick,
}) => {
  return (
    <li className="todo-item">
      <div>
        <input type="checkbox" checked={isDone} onChange={onToggleDone} />
        <span className="todo-item-text">{text}</span>
      </div>
      <button onClick={onDeleteClick}>X</button>
    </li>
  );
};
