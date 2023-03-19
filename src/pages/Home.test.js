import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Home from './Home';
describe('Home', () => {
    it('should have headline', () => {
        render(_jsx(Home, {}));
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
    });
});
