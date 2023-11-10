import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import stylesReducer from './reducers/style/StyleSlice';
import productReducer from './reducers/product/ProductSlice';
import commentsReducer from "./reducers/comment/CommentSlice";
import formReducer from "./reducers/form/FormSlice";
import searchReducer from "./reducers/search/SearchSlice";
import cartReducer from './reducers/cart/CartSlice';
import categoriesReducer from "./reducers/category/CategorySlice";


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