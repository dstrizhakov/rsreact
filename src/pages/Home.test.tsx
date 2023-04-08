import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import Home from './Home';

describe('Home', () => {
  it('should have headline', () => {
    render(<Home />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
  // it('Fetch cards', async () => {
  //   render(<Home />);

  //   expect(screen.getByText(/Home/i)).toBeDefined();

  //   userEvent.click(screen.getByRole('button', { name: 'Fetch Posts' }));

  //   await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'));

  //   expect(screen.getByRole('heading', { level: 3 })).toBeDefined();
  // });
});
