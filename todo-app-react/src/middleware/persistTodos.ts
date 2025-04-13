import { debounce } from "lodash-es";
import { Todo } from "../types/todo";
import { STORAGE_KEYS } from "../constants/storage";

const saveToStorage = debounce((todos: Todo[]) => {
  if (todos) {
    localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(todos));
  }
});

export const persistTodos = (store) => (next) => (action) => {
  const result = next(action); // 先执行 action
  if ((action as { type: string }).type.startsWith("todos/")) {
    // 监听 todos slice 的所有 action
    const todos = store.getState().todos.todos;
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    saveToStorage(todos);
  }
  return result;
};
