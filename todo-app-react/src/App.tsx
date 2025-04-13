import React, { useState } from "react";

// import { useTodos } from "./hooks/useTodos";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { addTodo, toggleTodo } from "./store/todoSlice";

import { TodoItem } from "./components/TodoItem";

function App() {
  const [input, setInput] = useState("");
  // const { todos, addTodo, toggleTodo } = useTodos();

  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      // addTodo(input);
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">React Todo</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
}

export default App;
