import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, test, expect, vi } from "vitest";
import About from "../../components/About";

// Mock GitHub Calendar
vi.mock("react-github-calendar", () => ({
  default: () => <div>GitHub Calendar Mock</div>,
}));

describe("About Component", () => {
  test("renders About Me heading", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", {
        name: /about me/i,
      })
    ).toBeInTheDocument();
  });

  test("renders introduction paragraph", () => {
    render(<About />);

    expect(
      screen.getByText(
        /computer information systems student/i
      )
    ).toBeInTheDocument();
  });

  test("renders technology paragraph", () => {
    render(<About />);

    expect(
      screen.getByText(
        /software development, cybersecurity/i
      )
    ).toBeInTheDocument();
  });

  test("renders career goal paragraph", () => {
    render(<About />);

    expect(
      screen.getByText(
        /continue developing my technical skills/i
      )
    ).toBeInTheDocument();
  });

  test("renders hobbies heading", () => {
    render(<About />);

    expect(
      screen.getByText(/when i'm not coding/i)
    ).toBeInTheDocument();
  });

  test("renders hobbies", () => {
    render(<About />);

    expect(
      screen.getByText(/playing video games/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/traveling/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/playing tennis/i)
    ).toBeInTheDocument();
  });

  test("renders Professional Skillset section", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", {
        name: /professional skillset/i,
      })
    ).toBeInTheDocument();
  });

  test("renders Tools I Use section", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", {
        name: /tools i use/i,
      })
    ).toBeInTheDocument();
  });

  test("renders Github Activity section", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", {
        name: /github activity/i,
      })
    ).toBeInTheDocument();
  });

  test("renders GitHub calendar", () => {
    render(<About />);

    expect(
      screen.getByText("GitHub Calendar Mock")
    ).toBeInTheDocument();
  });

  test("renders all major sections", () => {
    render(<About />);

    expect(
      screen.getByText(/about me/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/professional skillset/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/tools i use/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/github activity/i)
    ).toBeInTheDocument();
  });

  test("renders skill cards", () => {
    const { container } = render(<About />);

    const cards =
      container.querySelectorAll(".rounded-xl");

    expect(cards.length).toBeGreaterThan(10);
  });
});
