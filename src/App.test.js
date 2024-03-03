import { render } from '@testing-library/react';
import AppContainer from './AppContainer';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NextUIProvider } from "@nextui-org/react";

test('render Application', () => {
    render(
        <Provider store={store}>
            <NextUIProvider>
                <BrowserRouter>
                    <AppContainer />
                </BrowserRouter>
            </NextUIProvider>
        </Provider>
    );
});
