import React from "react";
import { TodoItem } from "./Todo";
import { useTodo } from "./TodoList.hooks";

export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

export const TodoList: React.FC = () => {
  const {
    todos,
    title,
    handleTitleChange,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodo();

  return (
    <div>
      <input value={title} onChange={handleTitleChange} type="text" />
      <button
        onClick={() => {
          handleAddTodo(title);
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};
