export const STORAGE_KEY = "react-todos";

export const persistTodos = (store) => (next) => (action) => {
  const result = next(action); // 先执行 action
  if ((action as { type: string }).type.startsWith("todos/")) {
    // 监听 todos slice 的所有 action
    const todos = store.getState().todos.todos;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
  return result;
};
