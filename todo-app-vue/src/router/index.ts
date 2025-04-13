import { createRouter, createWebHistory } from "vue-router";
import TodoList from "../pages/TodoList/index.vue";
import AddTodo from "../pages/AddTodo/index.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TodoList },
    { path: "/add", component: AddTodo },
  ],
});
