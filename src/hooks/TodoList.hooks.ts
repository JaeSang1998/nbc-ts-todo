import { FormEvent } from "react";

import { useGetTodosQuery } from "../queries/useGetTodosQuery";
import { useToggleTodoMuation } from "../mutations/useToggleTodoMuation";
import { useAddTodoMuation } from "../mutations/useAddTodoMuation";
import { useDeleteTodoMuation } from "../mutations/useDeleteTodoMutation";

export const useTodo = () => {
  const { isLoading, todos } = useGetTodosQuery();
  const { toggleTodo } = useToggleTodoMuation();
  const { addTodo } = useAddTodoMuation();
  const { deleteTodo } = useDeleteTodoMuation();

  const handleTodoSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement & { title: { value: string } };
    addTodo(target.title.value);
    (e.target as HTMLFormElement).reset();
  };

  if (isLoading) {
    return { isLoading } as const;
  }

  return {
    todos,
    handleToggleTodo: toggleTodo,
    handleDeleteTodo: deleteTodo,
    handleTodoSubmit,
  } as const;
};
