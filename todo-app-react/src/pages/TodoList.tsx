import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toggleTodo } from "../store/todoSlice";

import { TodoItem } from "../components/TodoItem";

function TodoList() {
  const navigate = useNavigate();
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
      <button
        onClick={() => navigate("/add")}
        className="bg-blue-500 text-white px-4 py-2 mt-4 w-full hover:bg-blue-600"
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoList;
