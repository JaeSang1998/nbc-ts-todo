import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as TodoApi from "../apis";
import { AddTodo, Todo } from "../types/Todo.types";
import { QUERY_KEY } from "../queries/query.keys";

export const useAddTodoMuation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: TodoApi.addTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_TODOS] }),
  });

  const addTodo = async (title: Todo["title"]) => {
    const newTodo: AddTodo = {
      title,
      isDone: false,
    };
    mutate(newTodo);
  };

  return { addTodo };
};
