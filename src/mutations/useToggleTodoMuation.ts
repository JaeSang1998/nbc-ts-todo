import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as TodoApi from "../apis";
import { ToggleTodo } from "../types/Todo.types";
import { QUERY_KEY } from "../queries/query.keys";

export const useToggleTodoMuation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: TodoApi.toggleTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_TODOS] }),
  });

  const toggleTodo = async (todo: ToggleTodo) => {
    mutate(todo);
  };

  return { toggleTodo };
};
