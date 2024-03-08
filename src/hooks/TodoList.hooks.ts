import { FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { addTodo, deleteTodo, toggleTodo } from "../store/todoReducers";

export const useTodo = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.value);

  const _addTodo = (title: string) => {
    dispatch(addTodo(title));
  };

  const handleToggleTodo = (id: string) => dispatch(toggleTodo(id));
  const handleDeleteTodo = (id: string) => dispatch(deleteTodo(id));

  const handleTodoSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement & { title: { value: string } };
    _addTodo(target.title.value);
    (e.target as HTMLFormElement).reset();
  };

  return { todos, handleToggleTodo, handleDeleteTodo, handleTodoSubmit };
};
