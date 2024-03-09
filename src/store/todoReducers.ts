import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:4000/todos";
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (title: string) => {
    const response = await axios.post(URL, { title, isDone: false });
    return response.data;
  }
);

export const toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  async (id: string) => {
    const todo = await axios.get(`${URL}/${id}`);
    const response = await axios.patch(`${URL}/${id}`, {
      isDone: !todo.data.isDone,
    });
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: string) => {
    await axios.delete(`${URL}/${id}`);
    return id;
  }
);
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
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
