import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect, beforeEach } from 'vitest';
import Toggle from '../../components/Toggle';

describe('Toggle Component', () => {
  beforeEach(() => {
    document.body.className = '';
  });

  test('renders toggle button', () => {
    render(<Toggle />);

    expect(
      screen.getByRole('button')
    ).toBeInTheDocument();
  });

  test('renders sun icon initially', () => {
    render(<Toggle />);

    expect(
      screen.getByText('☀')
    ).toBeInTheDocument();
  });

  test('adds dark-mode class on initial render', () => {
    render(<Toggle />);

    expect(
      document.body.classList.contains('dark-mode')
    ).toBe(true);
  });

  test('does not have light-mode class initially', () => {
    render(<Toggle />);

    expect(
      document.body.classList.contains('light-mode')
    ).toBe(false);
  });

  test('changes icon after click', () => {
    render(<Toggle />);

    fireEvent.click(
      screen.getByRole('button')
    );

    expect(
      screen.getByText('☾')
    ).toBeInTheDocument();
  });

  test('adds light-mode class after click', () => {
    render(<Toggle />);

    fireEvent.click(
      screen.getByRole('button')
    );

    expect(
      document.body.classList.contains('light-mode')
    ).toBe(true);
  });

  test('removes dark-mode class after click', () => {
    render(<Toggle />);

    fireEvent.click(
      screen.getByRole('button')
    );

    expect(
      document.body.classList.contains('dark-mode')
    ).toBe(false);
  });

  test('toggles back to dark mode on second click', () => {
    render(<Toggle />);

    const button = screen.getByRole('button');

    fireEvent.click(button);
    fireEvent.click(button);

    expect(
      document.body.classList.contains('dark-mode')
    ).toBe(true);

    expect(
      document.body.classList.contains('light-mode')
    ).toBe(false);
  });

  test('shows sun icon again after second click', () => {
    render(<Toggle />);

    const button = screen.getByRole('button');

    fireEvent.click(button);
    fireEvent.click(button);

    expect(
      screen.getByText('☀')
    ).toBeInTheDocument();
  });

  test('button has correct id', () => {
    render(<Toggle />);

    expect(
      screen.getByRole('button')
    ).toHaveAttribute('id', 'toggleIcon');
  });
});
