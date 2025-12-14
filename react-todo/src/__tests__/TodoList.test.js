cd ~/alx-fe-reactjs/react-todo

cat > src/__tests__/TodoList.test.js <<'EOF'
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList", () => {
  test("renders TodoList and initial demo todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByText("Learn React Testing Library")).toBeInTheDocument();
    expect(screen.getByText("Write Jest tests")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo component")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByLabelText("todo-input");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });

  test("toggles a todo completion status", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React Testing Library");
    expect(todo).toHaveStyle("text-decoration: none");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);

    const todoText = "Build a Todo component";
    expect(screen.getByText(todoText)).toBeInTheDocument();

    const deleteButton = screen.getByLabelText(`delete-${todoText}`);
    fireEvent.click(deleteButton);

    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});
EOF
