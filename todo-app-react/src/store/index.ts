import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { persistTodos } from "../middleware/persistTodos";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  /**
   * middleware: (getDefaultMiddleware) =>
   *   getDefaultMiddleware().concat(persistTodos)
   *
   * 1. getDefaultMiddleware(): returns an array of middleware functions that
   *    are included in Redux Toolkit by default.
   * 2. concat(persistTodos): adds the persistTodos middleware to the array.
   *
   * persistTodos is a middleware function that listens for actions on the
   * todos slice of the state and persists the state to local storage.
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistTodos),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
