import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import styleReducer from './reducers/style/StyleSlice';
import productReducer from './reducers/product/ProductSlice';
import commentReducer from "./reducers/comment/comment.slice";
import formReducer from "./reducers/form/FormSlice";
import searchReducer from "./reducers/search/SearchSlice";
import cartReducer from './reducers/cart/CartSlice';
import categoryReducer from "./reducers/category/CategorySlice";
import bestsellerReducer from './reducers/bestseller/BestsellerSlice';

const rootReducer = combineReducers({
    bestseller: bestsellerReducer,
    styles: styleReducer,
    product: productReducer,
    comments: commentReducer,
    forms: formReducer,
    search: searchReducer,
    cart: cartReducer,
    categories: categoryReducer
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