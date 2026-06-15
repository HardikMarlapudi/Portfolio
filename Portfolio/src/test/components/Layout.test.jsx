import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, test, expect, vi } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Layout from "../../components/Layout";

// Mock Navbar
vi.mock("../../components/Navbar", () => ({
  default: () => <div>Navbar Component</div>,
}));

// Mock Toggle
vi.mock("../../components/Toggle", () => ({
  default: () => <div>Toggle Component</div>,
}));

describe("Layout Component", () => {
  test("renders Navbar component", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<div>Home Page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Navbar Component")
    ).toBeInTheDocument();
  });

  test("renders Toggle component", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<div>Home Page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Toggle Component")
    ).toBeInTheDocument();
  });

  test("renders outlet content", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<div>Home Page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Home Page")
    ).toBeInTheDocument();
  });

  test("renders main element", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<div>Home Page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole("main")
    ).toBeInTheDocument();
  });
});
