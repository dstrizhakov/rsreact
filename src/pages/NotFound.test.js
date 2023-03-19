import { jsx as _jsx } from "react/jsx-runtime";
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
describe('NotFound', () => {
    it('should have headline', () => {
        render(_jsx(NotFound, {}));
        expect(screen.getByText(/404 Page not found/i)).toBeInTheDocument();
    });
});
