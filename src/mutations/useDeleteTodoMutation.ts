import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as TodoApi from "../apis";
import { Todo } from "../types/Todo.types";
import { QUERY_KEY } from "../queries/query.keys";

export const useDeleteTodoMuation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: TodoApi.deleteTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_TODOS] }),
  });

  const deleteTodo = async (id: Todo["id"]) => mutate(id);

  return { deleteTodo };
};
