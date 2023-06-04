import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContainer from './AppContainer';

import reportWebVitals from './reportWebVitals';

import store from './redux/store';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
