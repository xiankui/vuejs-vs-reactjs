<script setup lang="ts">
import { useTodoStore } from "../../stores/todo";
import TodoItem from "../../components/TodoItem.vue";
import TodoStats from "../../components/TodoStats.vue";

const { todos, toggleTodo } = useTodoStore();
</script>

<template>
  <div class="max-w-xl mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4 text-center">Vue Todo List</h1>
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo(todo.id)"
      />
    </ul>
    <router-link
      to="/add"
      className="mt-6 inline-block text-blue-500 hover:underline"
    >
      ➕ 添加任务
    </router-link>
    <TodoStats />
  </div>
</template>
