import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, test, expect } from "vitest";
import Achievements from "../../components/Achievements";

describe("Achievements Component", () => {
  test("renders achievements heading", () => {
    render(<Achievements />);

    expect(
      screen.getByRole("heading", {
        name: /achievements/i,
      })
    ).toBeInTheDocument();
  });

  test("renders introduction text", () => {
    render(<Achievements />);

    expect(
      screen.getByText(
        /academic growth, dedication, and commitment to excellence/i
      )
    ).toBeInTheDocument();
  });

  test("renders President's List achievement", () => {
    render(<Achievements />);

    expect(
      screen.getByText(/president's list/i)
    ).toBeInTheDocument();
  });

  test("renders Dean's List achievement", () => {
    render(<Achievements />);

    expect(
      screen.getByText(/dean's list/i)
    ).toBeInTheDocument();
  });

  test("renders SC LIFE Scholarship achievement", () => {
    render(<Achievements />);

    expect(
      screen.getByText(/sc life scholarship/i)
    ).toBeInTheDocument();
  });

  test("renders university name three times", () => {
    render(<Achievements />);

    const universities = screen.getAllByText(
      /university of south carolina/i
    );

    expect(universities).toHaveLength(3);
  });

  test("renders achievement years", () => {
    render(<Achievements />);

    expect(
      screen.getByText(/2023-2024/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/2024-2025/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /university of south carolina • 2023$/i
      )
    ).toBeInTheDocument();
  });

  test("renders first achievement description", () => {
    render(<Achievements />);

    expect(
      screen.getByText(
        /outstanding academic performance/i
      )
    ).toBeInTheDocument();
  });

  test("renders second achievement description", () => {
    render(<Achievements />);

    expect(
      screen.getByText(
        /academic excellence and consistent achievement/i
      )
    ).toBeInTheDocument();
  });

  test("renders third achievement description", () => {
    render(<Achievements />);

    expect(
      screen.getByText(
        /merit-based scholarship awarded/i
      )
    ).toBeInTheDocument();
  });

  test("renders exactly three achievement cards", () => {
    render(<Achievements />);

    const universities = screen.getAllByText(
      /university of south carolina/i
    );

    expect(universities).toHaveLength(3);
  });
});
