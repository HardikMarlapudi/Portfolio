import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect } from 'vitest';
import Achivements from '../../components/Achivements';

describe('Achivements Component', () => {
  test('renders achievements heading', () => {
    render(<Achivements />);

    expect(screen.getByText('Achievements')).toBeInTheDocument();
  });

  test('renders introduction text', () => {
    render(<Achivements />);

    expect(
      screen.getByText(
        /Here are some milestones that reflect my growth/i
      )
    ).toBeInTheDocument();
  });

  test('renders President List achievement', () => {
    render(<Achivements />);

    expect(
      screen.getByText(
        /University of South Carolina - President's List/i
      )
    ).toBeInTheDocument();
  });

  test('renders Dean List achievement', () => {
    render(<Achivements />);

    expect(
      screen.getByText(
        /University of South Carolina - Dean's List/i
      )
    ).toBeInTheDocument();
  });

  test('renders SC Life Scholarship achievement', () => {
    render(<Achivements />);

    expect(
      screen.getByText(
        /University of South Carolina - SC Life Scholarship/i
      )
    ).toBeInTheDocument();
  });

  test('renders institution names', () => {
    render(<Achivements />);

    const institutions = screen.getAllByText(
      /University of South Carolina, Columbia/i
    );

    expect(institutions).toHaveLength(3);
  });

  test('renders three achievement years', () => {
    render(<Achivements />);

    const institutions = document.querySelectorAll('.institution');

    expect(institutions).toHaveLength(3);

    expect(institutions[0]).toHaveTextContent('2023-2024');
    expect(institutions[1]).toHaveTextContent('2024-2025');
    expect(institutions[2]).toHaveTextContent('2023');
  })

  test('renders all achievement descriptions', () => {
    render(<Achivements />);

    const descriptions = screen.getAllByText(
      /academic excellence and dedication to my studies/i
    );

    expect(descriptions).toHaveLength(3);
  });

  test('renders three timeline items', () => {
    const { container } = render(<Achivements />);

    const timelineItems =
      container.querySelectorAll('.timeline-item');

    expect(timelineItems.length).toBe(3);
  });

  test('renders three timeline dots', () => {
    const { container } = render(<Achivements />);

    const timelineDots =
      container.querySelectorAll('.timeline-dot');

    expect(timelineDots.length).toBe(3);
  });
});
