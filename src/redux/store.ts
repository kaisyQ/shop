import thunk from 'redux-thunk';

import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import stylesReducer from './reducers/styles/stylesSlice';
import productReducer from './reducers/product/productSlice';
import commentsReducer from "./reducers/comment/commentSlice";
import formReducer from "./reducers/forms/formsSlice";
import searchReducer from "./reducers/search/searchSlice";
import cartReducer from './reducers/cart/cartSlice';
import categoriesReducer from "./reducers/category/category.slice";


const rootReducer = combineReducers({
    styles: stylesReducer,
    product: productReducer,
    comments: commentsReducer,
    forms: formReducer,
    search: searchReducer,
    cart: cartReducer,
    categories: categoriesReducer
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

export type AppDispatch = typeof store.dispatch;


export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;