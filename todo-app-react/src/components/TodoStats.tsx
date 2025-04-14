import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const TodoStats = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  const completed = useMemo(() => {
    console.log("[React] 计算已完成任务...");
    return todos.filter((t) => t.completed).length;
  }, [todos]);

  const remaining = useMemo(() => {
    console.log("[React] 计算未完成任务...");
    return todos.filter((t) => !t.completed).length;
  }, [todos]);

  return (
    <div className="mt-6">
      <p>✅ 已完成：{completed}</p>
      <p>🕗 待完成：{remaining}</p>
    </div>
  );
};

export default TodoStats;
