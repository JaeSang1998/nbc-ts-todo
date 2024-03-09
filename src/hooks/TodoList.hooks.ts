import { FormEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  addTodo,
  deleteTodo,
  fetchTodo,
  toggleTodo,
} from "../store/todoReducers";
import { AddTodo, ToggleTodo } from "../types/Todo.types";

export const useTodo = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.value);

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  const _addTodo = async (title: string) => {
    const newTodo: AddTodo = {
      title,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };

  const handleToggleTodo = async (todo: ToggleTodo) =>
    dispatch(toggleTodo(todo));

  const handleDeleteTodo = async (id: string) => dispatch(deleteTodo(id));

  const handleTodoSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement & { title: { value: string } };
    _addTodo(target.title.value);
    (e.target as HTMLFormElement).reset();
  };

  return { todos, handleToggleTodo, handleDeleteTodo, handleTodoSubmit };
};
