import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';

describe('Navbar Component', () => {
  const renderNavbar = () =>
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

  test('renders navigation bar', () => {
    renderNavbar();

    expect(
      screen.getByRole('navigation')
    ).toBeInTheDocument();
  });

  test('renders hamburger button', () => {
    renderNavbar();

    expect(
      screen.getByRole('button', {
        name: /toggle navigation menu/i,
      })
    ).toBeInTheDocument();
  });

  test('renders Home link', () => {
    renderNavbar();

    expect(
      screen.getByRole('link', { name: 'Home' })
    ).toBeInTheDocument();
  });

  test('renders About link', () => {
    renderNavbar();

    expect(
      screen.getByRole('link', { name: 'About' })
    ).toBeInTheDocument();
  });

  test('renders Projects link', () => {
    renderNavbar();

    expect(
      screen.getByRole('link', { name: 'Projects' })
    ).toBeInTheDocument();
  });

  test('renders Resume link', () => {
    renderNavbar();

    expect(
      screen.getByRole('link', { name: 'Resume' })
    ).toBeInTheDocument();
  });

  test('renders Achievements link', () => {
    renderNavbar();

    expect(
      screen.getByRole('link', {
        name: /achivements/i,
      })
    ).toBeInTheDocument();
  });

  test('renders Contact link', () => {
    renderNavbar();

    expect(
      screen.getByRole('link', { name: 'Contact' })
    ).toBeInTheDocument();
  });

  test('contains six navigation links', () => {
    renderNavbar();

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(6);
  });

  test('hamburger button toggles menu open', () => {
    renderNavbar();

    const button = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    });

    expect(button).toHaveAttribute(
      'aria-expanded',
      'false'
    );

    fireEvent.click(button);

    expect(button).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  });

  test('hamburger button toggles menu closed', () => {
    renderNavbar();

    const button = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    });

    fireEvent.click(button);
    fireEvent.click(button);

    expect(button).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  test('navigation links have correct routes', () => {
    renderNavbar();

    expect(
      screen.getByRole('link', { name: 'Home' })
    ).toHaveAttribute('href', '/home');

    expect(
      screen.getByRole('link', { name: 'About' })
    ).toHaveAttribute('href', '/about');

    expect(
      screen.getByRole('link', { name: 'Projects' })
    ).toHaveAttribute('href', '/projects');

    expect(
      screen.getByRole('link', { name: 'Resume' })
    ).toHaveAttribute('href', '/resume');

    expect(
      screen.getByRole('link', {
        name: /achivements/i,
      })
    ).toHaveAttribute('href', '/Achievements');

    expect(
      screen.getByRole('link', { name: 'Contact' })
    ).toHaveAttribute('href', '/contact');
  });
});
