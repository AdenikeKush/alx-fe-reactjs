import React from "react";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: "30px auto", padding: "0 16px" }}>
      <h1>react-todo</h1>
      <TodoList />
    </div>
  );
}
