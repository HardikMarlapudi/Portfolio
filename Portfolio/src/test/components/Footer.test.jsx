import { render } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect } from 'vitest';
import Footer from '../../components/Footer';

describe('Footer Component', () => {
  test('renders footer container', () => {
    const { container } = render(<Footer />);

    const footerContainer =
      container.querySelector('.icons2');

    expect(footerContainer).toBeInTheDocument();
  });

  test('renders four social media icons', () => {
    const { container } = render(<Footer />);

    const svgIcons =
      container.querySelectorAll('svg');

    expect(svgIcons).toHaveLength(4);
  });

  test('renders GitHub icon', () => {
    const { container } = render(<Footer />);

    const svgIcons =
      container.querySelectorAll('svg');

    expect(svgIcons[0]).toBeInTheDocument();
  });

  test('renders Gmail icon', () => {
    const { container } = render(<Footer />);

    const svgIcons =
      container.querySelectorAll('svg');

    expect(svgIcons[1]).toBeInTheDocument();
  });

  test('renders LinkedIn icon', () => {
    const { container } = render(<Footer />);

    const svgIcons =
      container.querySelectorAll('svg');

    expect(svgIcons[2]).toBeInTheDocument();
  });

  test('renders Instagram icon', () => {
    const { container } = render(<Footer />);

    const svgIcons =
      container.querySelectorAll('svg');

    expect(svgIcons[3]).toBeInTheDocument();
  });
});
