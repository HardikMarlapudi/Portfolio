import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect, vi } from 'vitest';
import About from '../../components/About';

// Mock GitHub Calendar
vi.mock('react-github-calendar', () => ({
  default: () => <div data-testid="github-calendar">GitHub Calendar</div>,
}));

describe('About Component', () => {
  test('renders About Me heading', () => {
    render(<About />);

    expect(screen.getByText('About Me:')).toBeInTheDocument();
  });

  test('renders introduction paragraph', () => {
    render(<About />);

    expect(
      screen.getByText(/Computer Information Systems student/i)
    ).toBeInTheDocument();
  });

  test('renders career goals paragraph', () => {
    render(<About />);

    expect(
      screen.getByText(/software development, cybersecurity/i)
    ).toBeInTheDocument();
  });

  test('renders hobbies section', () => {
    render(<About />);

    expect(screen.getByText('Playing Video Games')).toBeInTheDocument();
    expect(screen.getByText('Traveling')).toBeInTheDocument();
    expect(screen.getByText('Playing Tennis')).toBeInTheDocument();
  });

  test('renders Professional Skillset heading', () => {
    render(<About />);

    expect(
      screen.getByText('Professional Skillset')
    ).toBeInTheDocument();
  });

  test('renders Tools I Use heading', () => {
    render(<About />);

    expect(
      screen.getByText('Tools I use')
    ).toBeInTheDocument();
  });

  test('renders Days I Code heading', () => {
    render(<About />);

    expect(
      screen.getByText('Days I Code')
    ).toBeInTheDocument();
  });

  test('renders GitHub calendar component', () => {
    render(<About />);

    expect(
      screen.getByTestId('github-calendar')
    ).toBeInTheDocument();
  });

  test('renders all technology links', () => {
    render(<About />);

    const links = screen.getAllByRole('link');

    expect(links.length).toBeGreaterThanOrEqual(14);
  });

  test('contains React documentation link', () => {
    render(<About />);

    const reactLink = screen
      .getAllByRole('link')
      .find(link => link.href.includes('react.dev'));

    expect(reactLink).toBeDefined();
  });

  test('contains GitHub link', () => {
    render(<About />);

    const githubLink = screen
      .getAllByRole('link')
      .find(link => link.href.includes('github.com'));

    expect(githubLink).toBeDefined();
  });
});
