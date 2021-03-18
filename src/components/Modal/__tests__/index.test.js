import React from 'react';
import { render, cleanup, fireEvent, getByTestId, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

//<Modal currentPhoto={currentPhoto} onClose={toggleModal} />
//function toggleModal(image, i) {
//     setCurrentPhoto({...image, index: i});
//     setIsModalOpen(!isModalOpen);
// }
const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}
afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
    });
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
        fireEvent.click(getByText('Close this modal'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
});