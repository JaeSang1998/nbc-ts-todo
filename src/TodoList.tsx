import React, { useState } from "react";
import { TodoItem } from "./Todo";

export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = { id: crypto.randomUUID(), title, isDone: false };
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

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
