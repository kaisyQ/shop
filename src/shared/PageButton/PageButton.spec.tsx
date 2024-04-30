import React from 'react';
import {render} from "@testing-library/react";
import PageButton from "./PageButton";

describe('page-button component tests', () => {
    it('should render correctly', () => {
        const onClick = jest.fn();
        render(<PageButton onClick={onClick} />)
    });
})