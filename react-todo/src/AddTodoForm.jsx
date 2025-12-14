import React, { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
