import axios from "axios";
import { AddTodo, Todo, ToggleTodo } from "../types/Todo.types";

const URL = "http://localhost:4000/todos";

export const fetchTodo = async () => {
  const { data } = await axios.get<Todo[]>(URL);
  return data;
};

export const addTodo = async (todo: AddTodo) => {
  const { data } = await axios.post<Todo>(URL, todo);
  return data;
};

export const toggleTodo = async ({ id, isDone }: ToggleTodo) => {
  const { data } = await axios.patch<Todo>(`${URL}/${id}`, { isDone: !isDone });
  return data;
};

export const deleteTodo = async (id: Todo["id"]) => {
  await axios.delete(`${URL}/${id}`);
  return id;
};
