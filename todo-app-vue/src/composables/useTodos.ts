import { ref, watch } from "vue";
import type { Todo } from "../types/todo";

const STORAGE_KEY = "vue-todos";

export const useTodos = () => {
  // 使用 ref 创建响应式数据
  const todos = ref<Todo[]>([]);

  // 初始化加载
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      todos.value = JSON.parse(stored);
    } catch (e) {
      todos.value = [];
    }
  }

  // 自动持久化
  watch(
    todos,
    (newTodos) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
    },
    { deep: true }
  );

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    todos.value.push(newTodo);
  };

  const toggleTodo = (id: number) => {
    todos.value = todos.value.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };

  return { todos, addTodo, toggleTodo };
};
