import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

test('render login form', () => {
    render(
        <LoginForm onSubmit={() => {}}/>
    );
});
