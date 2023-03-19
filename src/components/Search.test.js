import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Search from './Search';
describe('Search', () => {
    it('should have placeholder', () => {
        render(_jsx(Search, {}));
        expect(screen.getByText(/Search query/)).toBeInTheDocument();
    });
    it('initially search input is empty', () => {
        render(_jsx(Search, {}));
        const searchInput = screen.getByRole('search');
        expect(searchInput.value).toBe('');
    });
    it('search input value can change', () => {
        render(_jsx(Search, {}));
        const searchInput = screen.getByRole('search');
        fireEvent.change(searchInput, { target: { value: 'some search query' } });
        expect(searchInput.value).toBe('some search query');
    });
});
