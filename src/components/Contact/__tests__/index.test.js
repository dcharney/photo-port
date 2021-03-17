import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm />);
    });
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });
});
describe('contact form is visible', () => {
    it('renders', () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    });
    it('renders', () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('button')).toHaveTextContent('Submit');
    });
});