import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect } from 'vitest';
import Projects from '../../components/Projects';

describe('Projects Component', () => {
  test('renders page title', () => {
    render(<Projects />);

    expect(
      screen.getByText('My Recent Works')
    ).toBeInTheDocument();
  });

  test('renders project description text', () => {
    render(<Projects />);

    expect(
      screen.getByText(
        /Here are a few projects I've worked on recently/i
      )
    ).toBeInTheDocument();
  });

  test('renders Calculator Program project', () => {
    render(<Projects />);

    expect(
      screen.getByRole('link', {
        name: /calculator program/i,
      })
    ).toBeInTheDocument();
  });

  test('renders BMI Calculator project', () => {
    render(<Projects />);

    expect(
      screen.getByRole('link', {
        name: /bmi calculator/i,
      })
    ).toBeInTheDocument();
  });

  test('renders Portfolio project', () => {
    render(<Projects />);

    expect(
      screen.getByRole('link', {
        name: /^portfolio$/i,
      })
    ).toBeInTheDocument();
  });

  test('renders Quote Generator project', () => {
    render(<Projects />);

    expect(
      screen.getByRole('link', {
        name: /quote generator/i,
      })
    ).toBeInTheDocument();
  });

  test('renders Pokedex project', () => {
    render(<Projects />);

    expect(
      screen.getByRole('link', {
        name: /pokedex/i,
      })
    ).toBeInTheDocument();
  });

  test('renders five project links', () => {
    render(<Projects />);

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(5);
  });

  test('renders five project images', () => {
    render(<Projects />);

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(5);
  });

  test('renders calculator repository link', () => {
    render(<Projects />);

    expect(
      screen.getByRole('link', {
        name: /calculator program/i,
      })
    ).toHaveAttribute(
      'href',
      'https://github.com/HardikMarlapudi/Calculator_React.js'
    );
  });

  test('renders BMI repository link', () => {
    render(<Projects />);

    expect(
      screen.getByRole('link', {
        name: /bmi calculator/i,
      })
    ).toHaveAttribute(
      'href',
      'https://github.com/HardikMarlapudi/BMI-Calculator'
    );
  });

  test('renders Portfolio repository link', () => {
    render(<Projects />);

    expect(
      screen.getByRole('link', {
        name: /^portfolio$/i,
      })
    ).toHaveAttribute(
      'href',
      'https://github.com/HardikMarlapudi/Portfolio'
    );
  });

  test('renders Quote Generator repository link', () => {
    render(<Projects />);

    expect(
      screen.getByRole('link', {
        name: /quote generator/i,
      })
    ).toHaveAttribute(
      'href',
      'https://github.com/HardikMarlapudi/QuoteGenerator'
    );
  });

  test('renders Pokedex repository link', () => {
    render(<Projects />);

    expect(
      screen.getByRole('link', {
        name: /pokedex/i,
      })
    ).toHaveAttribute(
      'href',
      'https://github.com/HardikMarlapudi/Pokedex'
    );
  });

  test('renders five project cards', () => {
    const { container } = render(<Projects />);

    const cards =
      container.querySelectorAll('.project-card-view');

    expect(cards).toHaveLength(5);
  });
});
