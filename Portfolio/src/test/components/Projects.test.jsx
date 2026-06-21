import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "../../components/Projects";

describe("Projects Component", () => {
  test("renders page heading", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", {
        name: /my recent work/i,
      })
    ).toBeInTheDocument();
  });

  test("renders description text", () => {
    render(<Projects />);

    expect(
      screen.getByText(
        /here are a few projects i've worked on recently/i
      )
    ).toBeInTheDocument();
  });

  test("renders all project titles", () => {
    render(<Projects />);

    expect(
      screen.getByText("Calculator Program")
    ).toBeInTheDocument();

    expect(
      screen.getByText("BMI Calculator")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Portfolio")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Quote Generator")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Pokedex")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Digital Clock")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Recipe Finder")
    ).toBeInTheDocument();
  });

  test("renders seven project cards", () => {
    render(<Projects />);

    const buttons = screen.getAllByRole("link", {
      name: /view project/i,
    });

    expect(buttons).toHaveLength(7);
  });

  test("renders seven project images", () => {
    render(<Projects />);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(7);
  });

  test("renders calculator project link", () => {
    render(<Projects />);

    const calculatorLink = screen
      .getAllByRole("link", {
        name: /view project/i,
      })[0];

    expect(calculatorLink).toHaveAttribute(
      "href",
      "https://hardikmarlapudi.github.io/Calculator_React.js/"
    );
  });

  test("all project links open in new tab", () => {
    render(<Projects />);

    const links = screen.getAllByRole("link", {
      name: /view project/i,
    });

    links.forEach((link) => {
      expect(link).toHaveAttribute(
        "target",
        "_blank"
      );
    });
  });

  test("all project links have security attributes", () => {
    render(<Projects />);

    const links = screen.getAllByRole("link", {
      name: /view project/i,
    });

    links.forEach((link) => {
      expect(link).toHaveAttribute(
        "rel",
        "noopener noreferrer"
      );
    });
  });
});
