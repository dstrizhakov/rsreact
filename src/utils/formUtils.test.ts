import { isValidDate } from './formUtils';

describe('Form validation date', () => {
  it('is correct', () => {
    expect(isValidDate('2025-01-01')).toBe(false);

    expect(isValidDate('2015-11-04')).toBe(true);
  });
});
