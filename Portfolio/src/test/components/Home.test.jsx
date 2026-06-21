import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, test, expect, vi } from "vitest";
import Home from "../../components/Home";

vi.mock("/photo/Profile-pic.png", () => ({
  default: "profile-pic.png",
}));

describe("Home Component", () => {
  test("renders main heading", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /hi there/i,
      })
    ).toBeInTheDocument();
  });

  test("renders user name", () => {
    render(<Home />);

    expect(
      screen.getByText(/hardik marlapudi/i)
    ).toBeInTheDocument();
  });

  test("renders introduction heading", () => {
    render(<Home />);

    expect(
      screen.getByText(/let me introduce myself/i)
    ).toBeInTheDocument();
  });

  test("renders university description", () => {
    render(<Home />);

    expect(
      screen.getByText(
        /university of south carolina/i
      )
    ).toBeInTheDocument();
  });

  test("renders technology description", () => {
    render(<Home />);

    expect(
      screen.getByText(
        /javascript, react, java, html, css/i
      )
    ).toBeInTheDocument();
  });

  test("renders profile image", () => {
    render(<Home />);

    const image = screen.getByAltText(/profile/i);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
  });

  test("renders find me on section", () => {
    render(<Home />);

    expect(
      screen.getByText(/find me on/i)
    ).toBeInTheDocument();
  });

  test("renders github link", () => {
    render(<Home />);

    const githubLink = screen
      .getAllByRole("link")
      .find(link =>
        link.href.includes("github.com")
      );

    expect(githubLink).toBeInTheDocument();
  });

  test("renders linkedin link", () => {
    render(<Home />);

    const linkedinLink = screen
      .getAllByRole("link")
      .find(link =>
        link.href.includes("linkedin.com")
      );

    expect(linkedinLink).toBeInTheDocument();
  });

  test("renders instagram link", () => {
    render(<Home />);

    const instagramLink = screen
      .getAllByRole("link")
      .find(link =>
        link.href.includes("instagram.com")
      );

    expect(instagramLink).toBeInTheDocument();
  });

  test("renders email link", () => {
    render(<Home />);

    const emailLink = screen
      .getAllByRole("link")
      .find(link =>
        link.href.startsWith("mailto:")
      );

    expect(emailLink).toBeInTheDocument();
  });

  test("renders exactly four social links", () => {
    render(<Home />);

    expect(
      screen.getAllByRole("link")
    ).toHaveLength(4);
  });
});
