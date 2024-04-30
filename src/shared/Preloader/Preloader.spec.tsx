import React from 'react';
import {render} from "@testing-library/react";
import Preloader from "./Preloader";

describe('preloader component tests', () => {
    it('should render correctly', () => {
        render(<Preloader />)
    });
})