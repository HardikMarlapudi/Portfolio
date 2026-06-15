import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, test, expect, vi, beforeEach } from "vitest";
import Contact from "../../components/Contact";

describe("Contact Component", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  test("renders contact heading", () => {
    render(<Contact />);

    expect(
      screen.getByRole("heading", {
        name: /contact me/i,
      })
    ).toBeInTheDocument();
  });

  test("renders description text", () => {
    render(<Contact />);

    expect(
      screen.getByText(
        /have a question, opportunity, or project in mind/i
      )
    ).toBeInTheDocument();
  });

  test("renders all form fields", () => {
    render(<Contact />);

    expect(
      screen.getByPlaceholderText(/name:/i)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/email:/i)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/subject:/i)
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/send a message/i)
    ).toBeInTheDocument();
  });

  test("allows typing into form fields", () => {
    render(<Contact />);

    const nameInput =
      screen.getByPlaceholderText(/name:/i);

    fireEvent.change(nameInput, {
      target: { value: "Hardik" },
    });

    expect(nameInput.value).toBe("Hardik");
  });

  test("renders submit button", () => {
    render(<Contact />);

    expect(
      screen.getByRole("button", {
        name: /send/i,
      })
    ).toBeInTheDocument();
  });

  test("shows sending message while submitting", async () => {
    fetch.mockImplementation(
      () => new Promise(() => {})
    );

    render(<Contact />);

    fireEvent.change(
      screen.getByPlaceholderText(/name:/i),
      { target: { value: "Hardik" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/email:/i),
      { target: { value: "hardik@test.com" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/subject:/i),
      { target: { value: "Test" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/send a message/i),
      { target: { value: "Hello" } }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /send/i,
      })
    );

    expect(
      screen.getByText(/sending/i)
    ).toBeInTheDocument();
  });

  test("shows success message after successful submission", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => ({
        success: true,
      }),
    });

    render(<Contact />);

    fireEvent.change(
      screen.getByPlaceholderText(/name:/i),
      { target: { value: "Hardik" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/email:/i),
      { target: { value: "hardik@test.com" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/subject:/i),
      { target: { value: "Test" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/send a message/i),
      { target: { value: "Hello" } }
    );

    fireEvent.submit(
      screen.getByRole("button", {
        name: /send/i,
      }).closest("form")
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          /submitted successfully/i
        )
      ).toBeInTheDocument();
    });
  });

  test("shows error message when API returns failure", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => ({
        success: false,
      }),
    });

    render(<Contact />);

    fireEvent.change(
      screen.getByPlaceholderText(/name:/i),
      { target: { value: "Hardik" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/email:/i),
      { target: { value: "hardik@test.com" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/subject:/i),
      { target: { value: "Test" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/send a message/i),
      { target: { value: "Hello" } }
    );

    fireEvent.submit(
      screen.getByRole("button", {
        name: /send/i,
      }).closest("form")
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          /something went wrong/i
        )
      ).toBeInTheDocument();
    });
  });

  test("shows error message when fetch throws error", async () => {
    fetch.mockRejectedValueOnce(
      new Error("Network Error")
    );

    render(<Contact />);

    fireEvent.change(
      screen.getByPlaceholderText(/name:/i),
      { target: { value: "Hardik" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/email:/i),
      { target: { value: "hardik@test.com" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/subject:/i),
      { target: { value: "Test" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText(/send a message/i),
      { target: { value: "Hello" } }
    );

    fireEvent.submit(
      screen.getByRole("button", {
        name: /send/i,
      }).closest("form")
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          /something went wrong/i
        )
      ).toBeInTheDocument();
    });
  });
});
