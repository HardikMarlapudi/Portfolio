import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect, vi } from 'vitest';
import Home from '../../components/Home';

// Mock image import
vi.mock('/photo/Profile-pic.png', () => ({
  default: 'profile-pic.png',
}));

describe('Home Component', () => {
  test('renders greeting message', () => {
    render(<Home />);
    expect(screen.getByText('Hi there!')).toBeInTheDocument();
  });

  test('renders name correctly', () => {
    render(<Home />);
    expect(screen.getByText("I'm Hardik Marlapudi")).toBeInTheDocument();
  });

  test('renders profile image', () => {
    render(<Home />);

    const image = screen.getByAltText('Profile Pic');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });

  test('renders introduction section', () => {
    render(<Home />);

    expect(
      screen.getByText(
        /I am a student at the University of South Carolina/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(/JavaScript, React.js, and Java/i)
    ).toBeInTheDocument();
  });

  test('renders field of interest section', () => {
    render(<Home />);

    expect(
      screen.getByText(/building new Web Technologies and Products/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Blockchain/i)
    ).toBeInTheDocument();
  });

  test('renders Find Me On section', () => {
    render(<Home />);

    expect(screen.getByText('FIND ME ON')).toBeInTheDocument();
    expect(screen.getByText('Feel free to connect me')).toBeInTheDocument();
  });

  test('renders all social media links', () => {
    render(<Home />);

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(4);
  });

  test('renders LinkedIn link correctly', () => {
    render(<Home />);

    const links = screen.getAllByRole('link');

    expect(links[2]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/hardik-marlapudi-b47a14307/'
    );
  });

  test('renders Instagram links correctly', () => {
    render(<Home />);

    const links = screen.getAllByRole('link');

    expect(links[0]).toHaveAttribute(
      'href',
      'https://www.instagram.com/hardik_marlapudi'
    );

    expect(links[3]).toHaveAttribute(
      'href',
      'https://www.instagram.com/hardik_marlapudi'
    );
  });

  test('renders Gmail link correctly', () => {
    render(<Home />);

    const links = screen.getAllByRole('link');

    expect(links[1]).toHaveAttribute(
      'href',
      'https://www.hardik.a.marlapudi@gmail.com'
    );
  });
});
