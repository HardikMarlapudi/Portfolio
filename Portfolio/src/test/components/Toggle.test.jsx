import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, test, expect, beforeEach } from "vitest";
import Toggle from '../../components/toggle.jsx';

describe("Toggle Component", () => {
beforeEach(() => {
document.documentElement.classList.remove("dark");
});

test("renders toggle button", () => {
render(<Toggle />);


expect(
  screen.getByRole("button")
).toBeInTheDocument();


});

test("shows sun icon initially", () => {
render(<Toggle />);


expect(
  screen.getByRole("button")
).toHaveTextContent("☀️");


});

test("adds dark class on initial render", () => {
render(<Toggle />);

expect(
  document.documentElement.classList.contains("dark")
).toBe(true);

});

test("toggles to light mode when clicked", () => {
render(<Toggle />);


const button = screen.getByRole("button");

fireEvent.click(button);

expect(button).toHaveTextContent("🌙");

expect(
  document.documentElement.classList.contains("dark")
).toBe(false);

});

test("toggles back to dark mode when clicked twice", () => {
render(<Toggle />);


const button = screen.getByRole("button");

fireEvent.click(button);
fireEvent.click(button);

expect(button).toHaveTextContent("☀️");

expect(
  document.documentElement.classList.contains("dark")
).toBe(true);


});

test("button has correct styling classes", () => {
render(<Toggle />);


const button = screen.getByRole("button");

expect(button).toHaveClass(
  "fixed",
  "bottom-6",
  "right-6",
  "bg-blue-600"
);

});
});
