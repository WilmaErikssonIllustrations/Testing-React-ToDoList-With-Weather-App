import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "../TodoForm";

describe("TodoForm", () => {
  test("renders input field and submit button", () => {
    // ARRANGE
    render(<TodoForm />);

    // ACT
    const label = screen.getByText("Ny uppgift");
    const input = screen.getByLabelText("Ny uppgift");
    const button = screen.getByRole("button", { name: "Lägg till" });

    // ASSERT
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
