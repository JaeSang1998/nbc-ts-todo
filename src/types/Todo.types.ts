export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

export type AddTodo = Omit<Todo, "id">;
export type ToggleTodo = Omit<Todo, "title">;
