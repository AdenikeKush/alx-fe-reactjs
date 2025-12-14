import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component Tests", () => {
  test("renders TodoList and initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByText("Learn React Testing Library")).toBeInTheDocument();
    expect(screen.getByText("Write Jest tests")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo component")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByLabelText("todo-input");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo completion status", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React Testing Library");

    // initially not completed
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

    // delete button next to that todo
    const deleteButton = screen.getByLabelText("delete-Build a Todo component");
    fireEvent.click(deleteButton);

    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});
