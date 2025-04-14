<script setup lang="ts">
import { computed } from "vue";
import { useTodoStore } from "../stores/todo";

const { todos } = useTodoStore();

const hasTodos = computed(() => todos.length > 0);
const allCompleted = computed(
  () => hasTodos.value && todos.every((t) => t.completed)
);
</script>

<template>
  <div class="text-gray-500 mt-4">
    <p v-if="!hasTodos">📭 暂无任务，快添加一个吧！</p>
    <p v-else-if="allCompleted">🎉 太棒了，全部任务完成！</p>
    <p v-else>📋 当前有 {{ todos.length }} 个任务待处理。</p>
  </div>
</template>
