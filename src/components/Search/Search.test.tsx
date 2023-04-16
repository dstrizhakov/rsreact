import { fireEvent, render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Search from './Search';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

const store = setupStore();

describe('Search', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </BrowserRouter>
    );
  });
  it('should have placeholder', () => {
    expect(screen.getByText(/Search query/)).toBeInTheDocument();
  });
  it('initially search input is empty', () => {
    const searchInput = screen.getByRole('search') as HTMLInputElement;
    expect(searchInput.value).toBe('');
  });
  it('search input value can change', () => {
    const searchInput = screen.getByRole('search') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'some search query' } });
    expect(searchInput.value).toBe('some search query');
  });
});
