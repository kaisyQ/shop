import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { PayloadAction } from "@reduxjs/toolkit";

import {
    getProduct, getProductsWithParams, getTopProducts
} from "api/api";

import type { LoadingType, ProductsLimit } from "types/types";

import { IDLE, LOADING, FAILED } from "constants/constants";
import { plainToClass, plainToInstance } from "class-transformer";
import { Product } from "./../../../models/Product";


interface IProductsInitialState {
    
    items: Product[],
    
    current: Product | null,
    
    loadingStatus: LoadingType,
    
    error: Error | null,
    
    total: number | null,
    
    limit: ProductsLimit,
}

const initialState: IProductsInitialState = {
    items: [],
    loadingStatus: IDLE,
    error: null,
    current: null,
    total: null,
    limit: 9
}

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts", async (
        { category, page, limit }:
            {
                category: string | null,
                page: string | null
                limit: number
            }) => {
    
    const response = await getProductsWithParams(
        limit,
        category ? category : undefined, 
        page ? page :  undefined,
    );
    return {
        products: response.data.items as Array<any>,
        total: response.data.total,
        status: response.status
    };
}
);

export const fetchProductBySlug = createAsyncThunk(
    "products/fetchProductBySlug",
    async (slug: string) => {
        const response = await getProduct(slug);
        return {
            product: response.data,
            status: response.status
        };
    }
);

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setCurrent: (state, action: PayloadAction<Product | null>) => {
            state.current = action.payload;
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.items.push(action.payload);
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            state.items = state.items.filter(product => {
                if (product.id !== action.payload.id) {
                    return product;
                }
                return {
                    ...product,
                    ...action.payload
                }
            })
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            //state.items = state.items.filter(product => product.id !== action.payload);
        },
        setLimit: (state, action: PayloadAction<ProductsLimit>) => {
            state.limit = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.total = action.payload.total;
            state.items = plainToInstance(Product, action.payload.products);
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })


        builder.addCase(fetchProductBySlug.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchProductBySlug.fulfilled,
            (state, action) => {
                state.loadingStatus = IDLE;
                state.error = null;
                if (action.payload.status === 200) {
                    const product = action.payload.product;
                    state.current = plainToClass(Product, product);
                }
            })
        builder.addCase(fetchProductBySlug.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
    }
})

const { actions, reducer } = productSlice;

export const {
    setCurrent, addProduct, removeProduct,
    updateProduct, setLimit,
} = actions;

export default reducer;