/**
 * Redux instead of hooks
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/todo";
import { STORAGE_KEYS } from "../constants/storage";

interface TodoState {
  todos: Todo[];
}

// Define the initial state and load from local storage
const initialState: TodoState = {
  todos: JSON.parse(localStorage.getItem(STORAGE_KEYS.TODOS) || "[]"),
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    /**
     * Adds a new todo item to the state.
     * @param {TodoState} state - The current state of the todo list.
     * @param {PayloadAction<string>} action - The action containing the text of the new todo.
     */
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    /**
     * Toggles the completed status of a single todo
     * @param {number} action.payload - the id of the todo to toggle
     */
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
