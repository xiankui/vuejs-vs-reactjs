<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const todoStore = useTodoStore();
const text = ref("");

const handleSubmit = () => {
  todoStore.addTodo(text.value);
  router.push("/");
};
</script>

<template>
  <input v-model="text" />
  <button @click="handleSubmit">添加</button>
</template>
