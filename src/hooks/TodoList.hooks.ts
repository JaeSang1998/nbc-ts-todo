import { FormEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  AddTodo,
  ToggleTodo,
  addTodo,
  deleteTodo,
  setTodo,
  toggleTodo,
} from "../store/todoReducers";

import * as TodoApi from "../apis";

export const useTodo = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.value);

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    const todos = await TodoApi.fetchTodo();
    dispatch(setTodo(todos));
  };

  const _addTodo = async (title: string) => {
    const newTodo: AddTodo = {
      title,
      isDone: false,
    };
    const todo = await TodoApi.addTodo(newTodo);
    dispatch(addTodo(todo));
  };

  const handleToggleTodo = async ({ id, isDone }: ToggleTodo) => {
    await TodoApi.toggleTodo({ id, isDone });
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = async (id: string) => {
    await TodoApi.deleteTodo(id);
    dispatch(deleteTodo(id));
  };

  const handleTodoSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement & { title: { value: string } };
    _addTodo(target.title.value);
    (e.target as HTMLFormElement).reset();
  };

  return { todos, handleToggleTodo, handleDeleteTodo, handleTodoSubmit };
};
