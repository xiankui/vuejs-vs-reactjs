<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useTodoStore } from "../../stores/todo";

const router = useRouter();
const input = ref("");
const { todos, addTodo, toggleTodo } = useTodoStore();

const handleSubmit = () => {
  if (input.value.trim()) {
    addTodo(input.value);
    input.value = "";

    router.push("/");
  }
};
</script>

<template>
  <div class="max-w-xl mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-4 text-center">Vue Todo Add</h1>
    <form @submit.prevent="handleSubmit" class="flex gap-2 mb-4">
      <input
        v-model="input"
        class="border p-2 flex-1"
        placeholder="Enter todo text"
      />
      <button
        type="submit"
        class="bg-green-500 text-white px-4 py-2 hover:bg-green-600"
      >
        Add
      </button>
    </form>
    <router-link
      to="/"
      className="mt-6 inline-block text-blue-500 hover:underline"
      >返回列表</router-link
    >
  </div>
</template>
