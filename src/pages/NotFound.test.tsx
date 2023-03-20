import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound', () => {
  it('should have headline', () => {
    render(<NotFound />);
    expect(screen.getByText(/404 Page not found/i)).toBeInTheDocument();
  });
});
