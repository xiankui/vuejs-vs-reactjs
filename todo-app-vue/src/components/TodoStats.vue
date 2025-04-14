<script setup lang="ts">
// 添加TodoStats组件，记录统计信息
import { computed } from "vue";
import { useTodoStore } from "../stores/todo";

const { todos } = useTodoStore();

const completed = computed(() => {
  console.log("[Vue] 计算已完成任务...");
  return todos.filter((t) => t.completed).length;
});

const remaining = computed(() => {
  console.log("[Vue] 计算未完成任务...");
  return todos.length - completed.value;
});
</script>

<template>
  <div class="mt-6">
    <p>✅ 已完成：{{ completed }}</p>
    <p>🕗 待完成：{{ remaining }}</p>
  </div>
</template>
