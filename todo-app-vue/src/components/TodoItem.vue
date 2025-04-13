<script setup lang="ts">
import type { Todo } from "../types/todo";

defineProps<{ todo: Todo }>();
const emit = defineEmits(["toggle"]);
</script>

<template>
  <li class="flex justify-between items-center p-2 border-b">
    <span
      @click="emit('toggle')"
      :class="
        todo.completed
          ? 'line-through text-gray-400 cursor-pointer'
          : 'cursor-pointer'
      "
    >
      {{ todo.text }}
    </span>
  </li>
</template>
