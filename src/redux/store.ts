import thunk from 'redux-thunk';

import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './reducers/auth/authSlice';
import blogReducer from './reducers/blog/reducer';
import stylesReducer from './reducers/styles/stylesSlice';
import productReducer from './reducers/product/productSlice';


const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer,
    styles: stylesReducer,
    product: productReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;

export default store;