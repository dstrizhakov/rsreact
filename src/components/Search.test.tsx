import { fireEvent, render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Search from './Search';

describe('Search', () => {
  it('should have placeholder', () => {
    render(<Search />);
    expect(screen.getByText(/Search query/)).toBeInTheDocument();
  });
  it('initially search input is empty', () => {
    render(<Search />);
    const searchInput = screen.getByRole('search') as HTMLInputElement;
    expect(searchInput.value).toBe('');
  });
  it('search input value can change', () => {
    render(<Search />);
    const searchInput = screen.getByRole('search') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'some search query' } });
    expect(searchInput.value).toBe('some search query');
  });
});
