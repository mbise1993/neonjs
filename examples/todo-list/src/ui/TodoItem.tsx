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
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <input type="checkbox" checked={isDone} onChange={onToggleDone} />
        <span className="ml-3">{isDone ? <del>{text}</del> : text}</span>
      </div>

      <button type="button" className="close" onClick={onDeleteClick}>
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  );
};
