import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('should have headline', () => {
    render(<About />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});
