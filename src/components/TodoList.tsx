import React from "react";
import { TodoItem } from "./Todo";
import { useTodo } from "../hooks/TodoList.hooks";

export const TodoList: React.FC = () => {
  const {
    isLoading,
    todos,
    handleTodoSubmit,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodo();

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <>
      <form onSubmit={handleTodoSubmit}>
        <input name="title" type="text" />
        <button type="submit">Add Todo</button>
      </form>
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
    </>
  );
};
