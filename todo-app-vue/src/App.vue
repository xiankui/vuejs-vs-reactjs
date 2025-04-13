<script setup lang="ts">
import { ref } from "vue";

// import { useTodos } from "./composables/useTodos";
import { useTodoStore } from "./stores/todo";

import TodoItem from "./components/TodoItem.vue";

const input = ref("");
const { todos, addTodo, toggleTodo } = useTodoStore();

const handleSubmit = () => {
  if (input.value.trim()) {
    addTodo(input.value);
    input.value = "";
  }
};
</script>

<template>
  <div class="max-w-xl mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4">Vue Todo</h1>
    <form @submit.prevent="handleSubmit" class="flex gap-2 mb-4">
      <input v-model="input" class="border p-2 flex-1" />
      <button type="submit" class="bg-green-500 text-white px-4 py-2">
        Add
      </button>
    </form>
    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo(todo.id)"
      />
    </ul>
  </div>
</template>
