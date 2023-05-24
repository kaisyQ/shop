import thunk from 'redux-thunk';

import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './reducers/auth/reducer';
import usersReducer from './reducers/users/reducer';
import blogReducer from './reducers/blog/reducer';
import stylesReducer from './reducers/styles/reducer';
import productReducer from './reducers/product/reducer';


const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    blog: blogReducer,
    styles: stylesReducer,
    product: productReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;