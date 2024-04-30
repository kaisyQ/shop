import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddCommentModal from 'components/Comments/AddCommentModal/AddCommentModal';

describe('AddCommentModal', () => {
    it('should render correctly', () => {
    
        const props = {
            isOpen: true,
            onOpen: jest.fn(),
            onOpenChange: jest.fn(),
            fetchToCreateComment: jest.fn(),
            onClose: jest.fn(),
            message: null, 
            setCommentMessage: jest.fn() as any 
        };

        const { getByLabelText, getByText,  } = render(<AddCommentModal {...props} />);
    
        expect(getByLabelText('Name')).toBeInTheDocument();
        expect(getByLabelText('Review')).toBeInTheDocument();
        expect(getByText('Select your rating')).toBeInTheDocument();
        expect(getByText('Close')).toBeInTheDocument();
        expect(getByText('Submit')).toBeInTheDocument();
    });

});