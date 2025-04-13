/**
 * Pinia Store instead of Composable API
 *
 * They are really similar!!!
 */
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { debounce } from "lodash-es";
import type { Todo } from "../types/todo";

const STORAGE_KEY = "vue-todos";

const saveToStorage = debounce((todos: Todo[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}, 500);

const loadTodos = (): Todo[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

export const useTodoStore = defineStore("todos", () => {
  const todos = ref<Todo[]>(loadTodos());

  watch(
    todos,
    (newTodos) => {
      saveToStorage(newTodos);
    },
    { deep: true }
  );

  const addTodo = (text: string) => {
    todos.value.push({
      id: Date.now(),
      text,
      completed: false,
    });
  };

  const toggleTodo = (id: number) => {
    const todo = todos.value.find((t) => t.id === id);
    if (todo) todo.completed = !todo.completed;
  };

  return { todos, addTodo, toggleTodo };
});
