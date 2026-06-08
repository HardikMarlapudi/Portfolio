import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import Layout from '../../components/Layout';

// Mock Navbar
vi.mock('../../components/Navbar', () => ({
  default: () => <div data-testid="navbar">Navbar</div>,
}));

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(),
  Outlet: () => (
    <div data-testid="outlet">
      Outlet Content
    </div>
  ),
}));

import { useLocation } from 'react-router-dom';

describe('Layout Component', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });

  test('renders navbar', () => {
    useLocation.mockReturnValue({
      pathname: '/home',
    });

    render(<Layout />);

    expect(
      screen.getByTestId('navbar')
    ).toBeInTheDocument();
  });

  test('renders outlet content', () => {
    useLocation.mockReturnValue({
      pathname: '/home',
    });

    render(<Layout />);

    expect(
      screen.getByTestId('outlet')
    ).toBeInTheDocument();
  });

  test('sets title for home page', () => {
    useLocation.mockReturnValue({
      pathname: '/home',
    });

    render(<Layout />);

    expect(document.title).toBe('Home');
  });

  test('sets title for about page', () => {
    useLocation.mockReturnValue({
      pathname: '/about',
    });

    render(<Layout />);

    expect(document.title).toBe('About');
  });

  test('sets title for projects page', () => {
    useLocation.mockReturnValue({
      pathname: '/projects',
    });

    render(<Layout />);

    expect(document.title).toBe('Projects');
  });

  test('sets title for contact page', () => {
    useLocation.mockReturnValue({
      pathname: '/contact',
    });

    render(<Layout />);

    expect(document.title).toBe('Contact');
  });

  test('sets default title for unknown route', () => {
    useLocation.mockReturnValue({
      pathname: '/unknown',
    });

    render(<Layout />);

    expect(document.title).toBe('Portfolio');
  });

  test('calls window.scrollTo', () => {
    useLocation.mockReturnValue({
      pathname: '/home',
    });

    render(<Layout />);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  test('renders main container', () => {
    useLocation.mockReturnValue({
      pathname: '/home',
    });

    const { container } = render(<Layout />);

    const main =
      container.querySelector('main.container');

    expect(main).toBeInTheDocument();
  });
});
