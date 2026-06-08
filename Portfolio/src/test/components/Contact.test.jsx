import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import Contact from '../../components/Contact';

describe('Contact Component', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test('renders contact heading', () => {
    render(<Contact />);

    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders subtitle', () => {
    render(<Contact />);

    expect(
      screen.getByText(
        /Have a question or a project in mind/i
      )
    ).toBeInTheDocument();
  });

  test('renders all form fields', () => {
    render(<Contact />);

    expect(screen.getByPlaceholderText('Name:')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email:')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Subject:')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Send a message...')
    ).toBeInTheDocument();
  });

  test('renders send button', () => {
    render(<Contact />);

    expect(
      screen.getByRole('button', { name: /send/i })
    ).toBeInTheDocument();
  });

  test('allows typing into name field', () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText('Name:');

    fireEvent.change(input, {
      target: { name: 'name', value: 'Hardik' },
    });

    expect(input.value).toBe('Hardik');
  });

  test('allows typing into email field', () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText('Email:');

    fireEvent.change(input, {
      target: {
        name: 'email',
        value: 'hardik@example.com',
      },
    });

    expect(input.value).toBe('hardik@example.com');
  });

  test('allows typing into subject field', () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText('Subject:');

    fireEvent.change(input, {
      target: {
        name: 'subject',
        value: 'Portfolio Question',
      },
    });

    expect(input.value).toBe('Portfolio Question');
  });

  test('allows typing into message field', () => {
    render(<Contact />);

    const textarea = screen.getByPlaceholderText(
      'Send a message...'
    );

    fireEvent.change(textarea, {
      target: {
        name: 'message',
        value: 'Hello from testing.',
      },
    });

    expect(textarea.value).toBe('Hello from testing.');
  });

  test('shows success message after successful submission', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            success: true,
          }),
      })
    );

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText('Name:'), {
      target: { name: 'name', value: 'Hardik' },
    });

    fireEvent.change(screen.getByPlaceholderText('Email:'), {
      target: {
        name: 'email',
        value: 'hardik@example.com',
      },
    });

    fireEvent.change(screen.getByPlaceholderText('Subject:'), {
      target: {
        name: 'subject',
        value: 'Test Subject',
      },
    });

    fireEvent.change(
      screen.getByPlaceholderText('Send a message...'),
      {
        target: {
          name: 'message',
          value: 'Test Message',
        },
      }
    );

    fireEvent.click(
      screen.getByRole('button', { name: /send/i })
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          /Thank you, your form has been submitted successfully/i
        )
      ).toBeInTheDocument();
    });
  });

  test('shows error message when submission fails', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            success: false,
          }),
      })
    );

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText('Name:'), {
      target: { name: 'name', value: 'Hardik' },
    });

    fireEvent.change(screen.getByPlaceholderText('Email:'), {
      target: {
        name: 'email',
        value: 'hardik@example.com',
      },
    });

    fireEvent.change(screen.getByPlaceholderText('Subject:'), {
      target: {
        name: 'subject',
        value: 'Testing',
      },
    });

    fireEvent.change(
      screen.getByPlaceholderText('Send a message...'),
      {
        target: {
          name: 'message',
          value: 'Test message',
        },
      }
    );

    fireEvent.click(
      screen.getByRole('button', { name: /send/i })
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          'Sorry, something went wrong while submitting the form.'
        )
      ).toBeInTheDocument();
    });
  });
});
