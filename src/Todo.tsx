import React from "react";
import { Todo } from "./TodoList";

type TodoProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TodoItem: React.FC<TodoProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => onToggle(todo.id)}
      />
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};
