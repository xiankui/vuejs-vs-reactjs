import { ref } from "vue";
import type { Todo } from "../types/todo";

export const useTodos = () => {
  // 使用 ref 创建响应式数据
  const todos = ref<Todo[]>([]);

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
