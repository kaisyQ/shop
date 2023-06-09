import thunk from 'redux-thunk';

import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './reducers/auth/authSlice';
import postsReducer from './reducers/posts/reducer';
import stylesReducer from './reducers/styles/stylesSlice';
import productReducer from './reducers/product/productSlice';
import usersReducer from './reducers/users/usersSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postsReducer,
    styles: stylesReducer,
    product: productReducer,
    users: usersReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;

export default store;