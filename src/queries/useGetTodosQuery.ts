import { useSuspenseQuery } from "@tanstack/react-query";
import * as TodoApi from "../apis";

import { QUERY_KEY } from "./query.keys";

export const useGetTodosQuery = () => {
  const { data: todos } = useSuspenseQuery({
    queryFn: TodoApi.fetchTodo,
    queryKey: [QUERY_KEY.GET_TODOS],
  });

  return { todos };
};
