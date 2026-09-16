import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TodoForm from "../TodoForm";
import userEvent from "@testing-library/user-event";

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
  test("user can write task in input field", async () => {
    // ARRANGE
    const user = userEvent.setup();
    render(<TodoForm />);

    const input = screen.getByLabelText("Ny uppgift");

    // ACT
    await user.type(input, "Deklarera");

    // ASSERT
    expect(input).toHaveValue("Deklarera");
  });
  test("Validation error if user input is empty", async () => {
    // ARRANGE
    const user = userEvent.setup();
    render(<TodoForm />);

    const button = screen.getByRole("button", { name: "Lägg till" });

    // ACT
    await user.click(button);

    // ASSERT
    const errorMessage = screen.getByRole("alert");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(
      "Skriv en uppgift innan du fortsätter.",
    );
  });
});
