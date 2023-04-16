import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

const store = setupStore();

describe('Home', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>
    );
  });
  it('should have headline', () => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
