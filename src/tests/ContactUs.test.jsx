import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactUs from '../components/ContactUs';

describe('ContactUs', () => {
  it('renders the section heading', () => {
    render(<ContactUs />);
    expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
  });

  it('renders all form fields', () => {
    render(<ContactUs />);
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your message...')).toBeInTheDocument();
  });

  it('renders the Send Message button', () => {
    render(<ContactUs />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('updates field values as the user types', () => {
    render(<ContactUs />);
    const nameInput = screen.getByPlaceholderText('Your Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
  });

  it('shows confirmation message after form submission', () => {
    render(<ContactUs />);
    fireEvent.change(screen.getByPlaceholderText('Your Name'),    { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'),   { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Subject'),      { target: { value: 'Hello' } });
    fireEvent.change(screen.getByPlaceholderText('Your message...'), { target: { value: 'Hi there!' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    expect(screen.getByText(/email client should have opened/i)).toBeInTheDocument();
  });

  it('replaces the form with a confirmation message after submission', () => {
    render(<ContactUs />);
    fireEvent.change(screen.getByPlaceholderText('Your Name'),       { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Your Email'),      { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Subject'),         { target: { value: 'Hello' } });
    fireEvent.change(screen.getByPlaceholderText('Your message...'), { target: { value: 'Hi!' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    expect(screen.queryByPlaceholderText('Your Name')).not.toBeInTheDocument();
  });
});
