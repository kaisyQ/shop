import thunk from 'redux-thunk';

import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './reducers/auth/authSlice';
import postsReducer from './reducers/posts/reducer';
import stylesReducer from './reducers/styles/stylesSlice';
import productReducer from './reducers/product/productSlice';
import usersReducer from './reducers/users/usersSlice';
import commentsReducer from "./reducers/comment/commentSlice";
import formReducer from "./reducers/forms/formsSlice";
import searchReducer from "./reducers/search/searchSlice";
import cartReducer from './reducers/cart/cartSlice';
import categoriesReducer from "./reducers/categories/categories.slice";


const rootReducer = combineReducers({
    auth: authReducer,
    posts: postsReducer,
    styles: stylesReducer,
    product: productReducer,
    users: usersReducer,
    comments: commentsReducer,
    forms: formReducer,
    search: searchReducer,
    cart: cartReducer,
    categoris: categoriesReducer
});


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: true,
        immutableCheck: false,
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;

export default store;