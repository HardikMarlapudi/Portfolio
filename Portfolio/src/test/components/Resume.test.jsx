import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, test, expect, vi } from "vitest";
import Resume from "../../components/Resume";

vi.mock("/pdf/Resume.pdf", () => ({
default: "resume.pdf",
}));

describe("Resume Component", () => {
test("renders Resume heading", () => {
render(<Resume />);

expect(
  screen.getByRole("heading", {
    name: /resume/i,
  })
).toBeInTheDocument();

});

test("renders description text", () => {
render(<Resume />);

expect(
  screen.getByText(
    /preview or download my resume below/i
  )
).toBeInTheDocument();

});

test("renders Show Preview button", () => {
render(<Resume />);

expect(
  screen.getByRole("button", {
    name: /show preview/i,
  })
).toBeInTheDocument();

});

test("renders Download Resume link", () => {
render(<Resume />);

const link = screen.getByRole("link", {
  name: /download resume/i,
});

expect(link).toBeInTheDocument();
expect(link).toHaveAttribute("download");

});

test("shows resume preview after button click", () => {
render(<Resume />);

fireEvent.click(
  screen.getByRole("button", {
    name: /show preview/i,
  })
);

expect(
  screen.getByTitle(/resume preview/i)
).toBeInTheDocument();


});

test("changes button text to Hide Preview", () => {
render(<Resume />);

fireEvent.click(
  screen.getByRole("button", {
    name: /show preview/i,
  })
);

expect(
  screen.getByRole("button", {
    name: /hide preview/i,
  })
).toBeInTheDocument();


});

test("renders Technical Skills section", () => {
render(<Resume />);

expect(
  screen.getByRole("heading", {
    name: /technical skills/i,
  })
).toBeInTheDocument();

});

test("renders all skills", () => {
render(<Resume />);

expect(screen.getByText("HTML5")).toBeInTheDocument();
expect(screen.getByText("CSS3")).toBeInTheDocument();
expect(screen.getByText("JavaScript")).toBeInTheDocument();
expect(screen.getByText("Java")).toBeInTheDocument();
expect(screen.getByText("React")).toBeInTheDocument();
expect(screen.getByText("Vue.js")).toBeInTheDocument();
expect(screen.getByText("Cybersecurity")).toBeInTheDocument();

});

test("renders Certifications section", () => {
render(<Resume />);


expect(
  screen.getByRole("heading", {
    name: /certifications/i,
  })
).toBeInTheDocument();


});

test("renders certification items", () => {
render(<Resume />);


expect(
  screen.getByText(
    /google cybersecurity professional certificate/i
  )
).toBeInTheDocument();

expect(
  screen.getByText(
    /frontend mentor react challenges/i
  )
).toBeInTheDocument();


});

test("renders Why Me section", () => {
render(<Resume />);

expect(
  screen.getByRole("heading", {
    name: /why me/i,
  })
).toBeInTheDocument();


});

test("renders developer description", () => {
render(<Resume />);

expect(
  screen.getByText(
    /passionate developer/i
  )
).toBeInTheDocument();

});

test("renders exactly seven skills", () => {
render(<Resume />);

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Java",
  "React",
  "Vue.js",
  "Cybersecurity",
];

skills.forEach((skill) => {
  expect(
    screen.getByText(skill)
  ).toBeInTheDocument();
});

expect(skills).toHaveLength(7);

});
});
