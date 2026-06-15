import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../../components/Navbar";

describe("Navbar Component", () => {
  const renderNavbar = () =>
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

  test("renders navigation element", () => {
    renderNavbar();

    expect(
      screen.getByRole("navigation")
    ).toBeInTheDocument();
  });

  test("renders Home link", () => {
    renderNavbar();

    expect(
      screen.getByRole("link", { name: /home/i })
    ).toBeInTheDocument();
  });

  test("renders About link", () => {
    renderNavbar();

    expect(
      screen.getByRole("link", { name: /about/i })
    ).toBeInTheDocument();
  });

  test("renders Projects link", () => {
    renderNavbar();

    expect(
      screen.getByRole("link", { name: /projects/i })
    ).toBeInTheDocument();
  });

  test("renders Resume link", () => {
    renderNavbar();

    expect(
      screen.getByRole("link", { name: /resume/i })
    ).toBeInTheDocument();
  });

  test("renders Achievements link", () => {
    renderNavbar();

    expect(
      screen.getByRole("link", {
        name: /achievements/i,
      })
    ).toBeInTheDocument();
  });

  test("renders Contact link", () => {
    renderNavbar();

    expect(
      screen.getByRole("link", {
        name: /contact/i,
      })
    ).toBeInTheDocument();
  });

  test("renders six navigation links", () => {
    renderNavbar();

    expect(
      screen.getAllByRole("link")
    ).toHaveLength(6);
  });

  test("home link points to root route", () => {
    renderNavbar();

    expect(
      screen.getByRole("link", {
        name: /home/i,
      })
    ).toHaveAttribute("href", "/");
  });

  test("about link points to about route", () => {
    renderNavbar();

    expect(
      screen.getByRole("link", {
        name: /about/i,
      })
    ).toHaveAttribute("href", "/about");
  });

  test("projects link points to projects route", () => {
    renderNavbar();

    expect(
      screen.getByRole("link", {
        name: /projects/i,
      })
    ).toHaveAttribute("href", "/projects");
  });

  test("resume link points to resume route", () => {
    renderNavbar();

    expect(
      screen.getByRole("link", {
        name: /resume/i,
      })
    ).toHaveAttribute("href", "/resume");
  });

  test("achievements link points to achievements route", () => {
    renderNavbar();

    expect(
      screen.getByRole("link", {
        name: /achievements/i,
      })
    ).toHaveAttribute("href", "/achievements");
  });

  test("contact link points to contact route", () => {
    renderNavbar();

    expect(
      screen.getByRole("link", {
        name: /contact/i,
      })
    ).toHaveAttribute("href", "/contact");
  });
});
