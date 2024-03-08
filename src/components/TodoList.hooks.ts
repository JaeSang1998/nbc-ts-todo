import { useState } from "react";
import { Todo } from "./TodoList";

export const useTodo = ({ title }: { title: Todo["title"] }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (title: Todo["title"]) => {
    const newTodo: Todo = { id: crypto.randomUUID(), title, isDone: false };
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  const handleToggleTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDeleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    title,
    handleTitleChange,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
  };
};
