import React from 'react';
import Component404 from "./404";
import {render} from "@testing-library/react";
import AddCommentModal from "../../components/Comments/AddCommentModal/AddCommentModal";


describe('404 component tests', () => {
    it('should render correctly', () => {
        render(<Component404 />);
    });

    it('should have text', () => {
        const {getByText} = render(<Component404 />);
        expect(getByText("Page not found...")).toBeInTheDocument();
    });
});