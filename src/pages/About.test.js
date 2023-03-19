import { jsx as _jsx } from "react/jsx-runtime";
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';
describe('About', () => {
    it('should have headline', () => {
        render(_jsx(About, {}));
        expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    });
});
