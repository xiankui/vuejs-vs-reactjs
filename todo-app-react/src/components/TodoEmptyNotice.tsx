import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const TodoEmptyNotice = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  const hasTodos = useMemo(() => todos.length > 0, [todos]);
  const allCompleted = useMemo(
    () => hasTodos && todos.every((t) => t.completed),
    [hasTodos, todos]
  );

  return (
    <div className="text-gray-500 mt-4">
      {!hasTodos ? (
        <p>📭 暂无任务，快添加一个吧！</p>
      ) : allCompleted ? (
        <p>🎉 太棒了，全部任务完成！</p>
      ) : (
        <p>📋 当前有 {todos.length} 个任务待处理。</p>
      )}
    </div>
  );
};

export default TodoEmptyNotice;
