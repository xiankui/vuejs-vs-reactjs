import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TodoList from "./pages/TodoList";
import AddTodo from "./pages/AddTodo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </Router>
  );
}

export default App;
