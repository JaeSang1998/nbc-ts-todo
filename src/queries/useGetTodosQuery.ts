import { useQuery } from "@tanstack/react-query";
import * as TodoApi from "../apis";

import { QUERY_KEY } from "./query.keys";

export const useGetTodosQuery = () => {
  const {
    data: todos,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: TodoApi.fetchTodo,
    queryKey: [QUERY_KEY.GET_TODOS],
  });

  if (isLoading || !isSuccess) {
    return { isLoading: true } as const;
  }

  return { todos, isLoading: false } as const;
};
