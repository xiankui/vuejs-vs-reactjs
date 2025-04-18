import { useState, useEffect } from "react";
import { Todo } from "../types/todo";
import { STORAGE_KEYS } from "../constants/storage";

export const useTodos = () => {
  // 使用 useState 创建响应式数据并从本地存储中加载
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.TODOS);
    return stored ? JSON.parse(stored) : [];
  });

  // 使用 useEffect 更新本地存储
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return { todos, addTodo, toggleTodo };
};
