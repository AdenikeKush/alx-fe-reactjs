import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const initialTodos = [
  { id: 1, text: "Learn React Testing Library", completed: false },
  { id: 2, text: "Write Jest tests", completed: true },
  { id: 3, text: "Build a Todo component", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h2>Todo List</h2>

      <AddTodoForm onAdd={addTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              role="todo-item"
              onClick={() => toggleTodo(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button
              aria-label={`delete-${todo.id}`}
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
