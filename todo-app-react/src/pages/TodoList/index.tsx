import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { toggleTodo } from "../../store/todoSlice";

import { TodoItem } from "../../components/TodoItem";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">React Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
        ))}
      </ul>
      <Link
        to="/add"
        className="mt-6 inline-block text-blue-500 hover:underline"
      >
        ➕ 添加任务
      </Link>
    </div>
  );
}

export default TodoList;
