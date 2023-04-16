import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render', () => {
    render(<Footer />);
    expect(screen.getByText(/Dmitry Strizhakov/i)).toBeInTheDocument();
  });
});
