import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList testing component", () => {
  it("should render the TodoList component with initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByText("Learn React Testing Library")).toBeInTheDocument();
    expect(screen.getByText("Write Jest tests")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo component")).toBeInTheDocument();
  });

  it("should add a new todo item", () => {
    render(<TodoList />);

    const input = screen.getByLabelText("todo-input");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.submit(addButton.closest("form"));

    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });

  it("should toggle a todo item completion status", () => {
    render(<TodoList />);

    const todo
