import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Components/Button";

test("renders a button", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("handles click", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  fireEvent.click(screen.getByRole("button"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
