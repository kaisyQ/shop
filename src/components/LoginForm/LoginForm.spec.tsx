import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

test('render Application', () => {
    render(
        <LoginForm onSubmit={() => {}}/>
    );
});
