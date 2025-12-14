import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

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

  test("toggles a todo between completed and not completed", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React Testing Library");

    // Initially not completed: no line-through
    expect(todo).toHaveStyle({ textDecoration: "none" });

    fireEvent.click(todo);
    expect(todo).toHaveStyle({ textDecoration: "line-through" });

    fireEvent.click(todo);
    expect(todo).toHaveStyle({ textDecoration: "none" });
  });

  test("deletes a todo item", () => {
    render(<TodoList />);

    const todoText = "Build a Todo component";
    expect(screen.getByText(todoText)).toBeInTheDocument();

    // Find the Delete button next to that todo
    const deleteButtons = screen.getAllByText("Delete");
    // Click the last one (stable enough for this simple demo list)
    fireEvent.click(deleteButtons[deleteButtons.length - 1]);

    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});
