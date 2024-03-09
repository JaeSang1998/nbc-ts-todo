import React from "react";
import { Todo, ToggleTodo } from "../store/todoReducers";

type TodoProps = {
  todo: Todo;
  onToggle: (todo: ToggleTodo) => void;
  onDelete: (id: string) => void;
};

export const TodoItem: React.FC<TodoProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => onToggle({ ...todo })}
      />
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};
