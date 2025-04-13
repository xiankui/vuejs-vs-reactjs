import { defineStore } from "pinia";
import { ref } from "vue";
import type { Todo } from "../types/todo";

export const useTodoStore = defineStore("todos", () => {
  const todos = ref<Todo[]>([]);

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
