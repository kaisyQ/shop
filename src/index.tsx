import "reflect-metadata";
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContainer from './AppContainer';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import {NextUIProvider} from "@nextui-org/react";


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
