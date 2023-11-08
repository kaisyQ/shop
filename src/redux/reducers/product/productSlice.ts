import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { PayloadAction } from "@reduxjs/toolkit";

import {
    getProduct, getTopProducts
} from "api/api";

import type { IProduct, LoadingType, ProductLink } from "types/types";

import { IDLE, LOADING, FAILED } from "constants/constants";


import { getProductsWithCategoryParams } from "api/api";

interface IProductsInitialState {
    items: IProduct[],
    topProducts: ProductLink[]
    current: IProduct | null,
    loadingStatus: LoadingType,
    error: Error | null,
    total: number | null    

}

const initialState: IProductsInitialState = {
    items: [],
    topProducts: [],
    loadingStatus: IDLE,
    error: null,
    current: null,
    total: null
}

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts", async (category: string | null | undefined) => {
        const response = await getProductsWithCategoryParams(category ? category : null);
        return {
            products: response.data.items,
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

export const fetchTopProducts = createAsyncThunk(
    "products/fetchTopProducts",
    async () => {
        const response = await getTopProducts();
        return {
            products: response.data.items,
            status: response.status
        };
    }
);


const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setCurrent: (state, action: PayloadAction<IProduct | null>) => {
            state.current = action.payload;
        },
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.items.push(action.payload);
        },
        updateProduct: (state, action: PayloadAction<IProduct>) => {
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
            state.items = state.items.filter(product => product.id !== action.payload);
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
            state.items = action.payload.products.map((product: any) => {
                return {
                    id: product.id,
                    slug: product.slug,
                    name: product.name,
                    delivery: product.aboutDelivery,
                    description: product.aboutProduct,
                    count: product.count,
                    price: product.price,
                    discountPrice: product.discountPrice,
                    params: {
                        Width: product.width,
                        Height: product.height,
                        Depth: product.depth
                    },
                    createdAt: new Date(product.created_at),
                    imagesSrc: product.images,
                    topOfTheWeek: product.bestseller
                };
            })
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
                    state.current = {
                        id: product.id,
                        name: product.name,
                        slug: product.slug,
                        delivery: product.delivery,
                        description: product.description,
                        count: product.count,
                        price: product.price,
                        discountPrice: product.discountPrice,
                        createdAt: new Date(product.createdAt),
                        params: {
                            Width: product.width,
                            Height: product.height,
                            Depth: product.depth
                        },
                        imagesSrc: product.images,
                        topOfTheWeek: product.bestseller
                    };
                }
            })
        builder.addCase(fetchProductBySlug.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })

        builder.addCase(fetchTopProducts.pending, (state, action) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchTopProducts.fulfilled, (state, action) => {
            state.loadingStatus = IDLE;
            state.error = null;

            if (action.payload.status === 200) {
                state.topProducts = action.payload.products.map((product: any) => ({
                    id: product.id,
                    name: product.name,
                    slug: product.slug,
                    imagesSrc: product.images,
                }))
            }
        })
        builder.addCase(fetchTopProducts.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
    }
})

const { actions, reducer } = productSlice;

export const {
    setCurrent, addProduct, removeProduct,
    updateProduct,
} = actions;

export default reducer;