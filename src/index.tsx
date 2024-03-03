import "reflect-metadata";
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContainer from './AppContainer';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
