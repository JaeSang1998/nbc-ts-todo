import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as TodoApi from "../apis";
import { Todo } from "../types/Todo.types";

export const fetchTodo = createAsyncThunk("todos/fetchTodo", TodoApi.fetchTodo);
export const addTodo = createAsyncThunk("todos/addTodo", TodoApi.addTodo);
export const toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  TodoApi.toggleTodo
);
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  TodoApi.deleteTodo
);

type TodoState = { value: Todo[] };

const initialState: TodoState = { value: [] };

export const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.value.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.value.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index !== -1) {
          state.value[index] = action.payload;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.value = state.value.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
