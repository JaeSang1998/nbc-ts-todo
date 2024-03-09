import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

export type AddTodo = Omit<Todo, "id">;
export type ToggleTodo = Omit<Todo, "title">;

type TodoState = { value: Todo[] };

const initialState: TodoState = { value: [] };

export const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, { payload }: PayloadAction<Todo[]>) => {
      state.value = payload;
    },
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.value.push(payload);
    },
    toggleTodo: (state, { payload }: PayloadAction<Todo["id"]>) => {
      const index = state.value.findIndex((todo) => todo.id === payload);
      if (index !== -1) {
        state.value[index].isDone = !state.value[index].isDone;
      }
    },
    deleteTodo: (state, { payload }: PayloadAction<Todo["id"]>) => {
      state.value = state.value.filter((todo) => todo.id !== payload);
    },
  },
});

export const { setTodo, addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
