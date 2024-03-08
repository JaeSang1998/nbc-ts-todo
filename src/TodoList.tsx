import React, { useEffect, useState } from "react";
import { TodoItem } from "./Todo";
import { addTodo, deleteTodo, setTodo, toggleTodo } from "./store/todoReducers";
import { useAppDispatch, useAppSelector } from "./store";
import axios from "axios";

export const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.value);

  const fetchTodo = async () => {
    const { data } = await axios.get("http://localhost:4000/todos");
    dispatch(setTodo(data));
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const [title, setTitle] = useState("");
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleAddTodo = (title: string) => {
    dispatch(addTodo(title));
    setTitle("");
  };

  const handleToggleTodo = (id: string) => dispatch(toggleTodo(id));
  const handleDeleteTodo = (id: string) => dispatch(deleteTodo(id));

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
