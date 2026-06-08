import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect, vi } from 'vitest';
import Resume from '../../components/Resume';

// Mock PDF import
vi.mock('/pdf/Resume.pdf', () => ({
  default: 'Resume.pdf',
}));

describe('Resume Component', () => {
  test('renders resume title', () => {
    render(<Resume />);

    expect(
      screen.getByText('Resume')
    ).toBeInTheDocument();
  });

  test('renders resume description', () => {
    render(<Resume />);

    expect(
      screen.getByText(
        /If you're interested in my qualifications for IT roles/i
      )
    ).toBeInTheDocument();
  });

  test('renders Show Preview button initially', () => {
    render(<Resume />);

    expect(
      screen.getByRole('button', {
        name: /show preview/i,
      })
    ).toBeInTheDocument();
  });

  test('shows resume preview when button is clicked', () => {
    render(<Resume />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /show preview/i,
      })
    );

    expect(
      screen.getByTitle('Resume Preview')
    ).toBeInTheDocument();
  });

  test('changes button text to Hide Preview', () => {
    render(<Resume />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /show preview/i,
      })
    );

    expect(
      screen.getByRole('button', {
        name: /hide preview/i,
      })
    ).toBeInTheDocument();
  });

  test('hides preview when Hide Preview is clicked', () => {
    render(<Resume />);

    const button = screen.getByRole('button', {
      name: /show preview/i,
    });

    fireEvent.click(button);

    fireEvent.click(
      screen.getByRole('button', {
        name: /hide preview/i,
      })
    );

    expect(
      screen.queryByTitle('Resume Preview')
    ).not.toBeInTheDocument();
  });

  test('renders Skills section', () => {
    render(<Resume />);

    expect(
      screen.getByText('Skills')
    ).toBeInTheDocument();
  });

  test('renders skill items', () => {
    render(<Resume />);

    const listItems = screen.getAllByRole('listitem');

    expect(
      listItems.some(item =>
        item.textContent.includes('HTML/CSS')
      )
    ).toBe(true);

    expect(
      listItems.some(item =>
        item.textContent.includes('JavaScript')
      )
    ).toBe(true);

    expect(
      listItems.some(item =>
        item.textContent.includes('Java')
      )
    ).toBe(true);

    expect(
      listItems.some(item =>
        item.textContent.includes('React.js')
      )
    ).toBe(true);

    expect(
      listItems.some(item =>
        item.textContent.includes('Vue.js')
      )
    ).toBe(true);

    expect(
      listItems.some(item =>
        item.textContent.includes(
          'CyberSecurity Fundamentals'
        )
      )
    ).toBe(true);
  });

  test('renders Certifications section', () => {
    render(<Resume />);

    expect(
      screen.getByText('Certifications')
    ).toBeInTheDocument();
  });

  test('renders certification items', () => {
    render(<Resume />);

    expect(
      screen.getByText(
        'Google Cybersecurity Certificate (2025)'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Frontend Mentor Challenges (React)'
      )
    ).toBeInTheDocument();
  });

  test('renders Why Me section', () => {
    render(<Resume />);

    expect(
      screen.getByText('Why Me?')
    ).toBeInTheDocument();
  });

  test('renders personal statement', () => {
    render(<Resume />);

    expect(
      screen.getByText(
        /I'm a passionate developer with a strong foundation/i
      )
    ).toBeInTheDocument();
  });

  test('renders one iframe only when preview is enabled', () => {
    const { container } = render(<Resume />);

    expect(
      container.querySelectorAll('iframe')
    ).toHaveLength(0);

    fireEvent.click(
      screen.getByRole('button', {
        name: /show preview/i,
      })
    );

    expect(
      container.querySelectorAll('iframe')
    ).toHaveLength(1);
  });
});
