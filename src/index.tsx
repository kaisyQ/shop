import "reflect-metadata";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContainer from './AppContainer';

import reportWebVitals from './reportWebVitals';

import store from './store/store';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NextUIProvider } from "@nextui-org/react";

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
