import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright 2023/i)).toBeInTheDocument();
    expect(screen.getByText(/RSSCHOOL 2023/i)).toBeInTheDocument();
  });
});
