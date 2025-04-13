import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { persistTodos } from "../middleware/persistTodos";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistTodos),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
