import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Home from './Home';

describe('Home', () => {
  it('should have headline', () => {
    render(<Home />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
