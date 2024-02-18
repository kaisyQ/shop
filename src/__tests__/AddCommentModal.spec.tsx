import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddCommentModal from 'components/Comments/AddCommentModal/AddCommentModal';

describe('AddCommentModal', () => {
    it('should render correctly', () => {
    
        const props = {
            isOpen: true,
            onOpen: jest.fn(),
            onOpenChange: jest.fn(),
            fetchToCreateComment: jest.fn()
        };

        const { getByLabelText, getByText,  } = render(<AddCommentModal {...props} />);
    
        expect(getByLabelText('Name')).toBeInTheDocument();
        expect(getByLabelText('Review')).toBeInTheDocument();
        expect(getByText('Select your rating')).toBeInTheDocument();
        expect(getByText('Close')).toBeInTheDocument();
        expect(getByText('Submit')).toBeInTheDocument();
    });

    it('should call fetchToCreateComment when submit button is clicked', () => {
        
        const props = {
            isOpen: true,
            onOpen: jest.fn(),
            onOpenChange: jest.fn(),
            fetchToCreateComment: jest.fn()
        };
        
        const { getByLabelText, getByText } = render(<AddCommentModal {...props} />);
        
        fireEvent.change(getByLabelText('Name'), { target: { value: 'John Doe' } });
        fireEvent.change(getByLabelText('Review'), { target: { value: 'Great product!' } });
        fireEvent.click(getByText('Submit'));

        expect(props.fetchToCreateComment).toHaveBeenCalledWith({
            username: 'John Doe',
            text: 'Great product!',
            stars: 1
        });
    });
});