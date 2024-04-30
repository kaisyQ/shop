import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { getProduct, getProductsWithParams } from "api/products/index";
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
    
    isOldest: boolean,
    isSortByAlphabetAtoZ: boolean,
    priceFrom: number|null,
    priceTo: number|null,
}

const initialState: IProductsInitialState = {
    items: [],
    loadingStatus: IDLE,
    error: null,
    current: null,
    total: null,
    limit: 9,
    isOldest: false,
    isSortByAlphabetAtoZ: true,
    priceFrom: null,
    priceTo: null,
}

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts", async (
        { category, page, limit, isOldest, isSortByAlphabetAtoZ, priceFrom, priceTo }:
            {
                category: string | null,
                page: string | null
                limit: number,
                isOldest: boolean,
                isSortByAlphabetAtoZ: boolean,
                priceFrom: number|null,
                priceTo: number|null
            }) => {
    
    const response = await getProductsWithParams(
        limit,
        isOldest,
        isSortByAlphabetAtoZ,
        category ? category : undefined, 
        page ? page :  undefined,
        priceFrom ? priceFrom : undefined,
        priceTo ? priceTo : undefined,

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
        setLimit: (state, action: PayloadAction<ProductsLimit>) => {
            state.limit = action.payload;
        },
        setIsOldest: (state, action: PayloadAction<boolean>) => {
            state.isOldest = action.payload;
        },
        setIsSortByAlphabetAtoZ: (state, action: PayloadAction<boolean>) => {
            state.isSortByAlphabetAtoZ = action.payload;
        },
        setPriceFrom: (state, action: PayloadAction<number>) => {
            state.priceFrom = action.payload;
        },
        setPriceTo: (state, action: PayloadAction<number>) => {
            state.priceTo = action.payload;
        }
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
    
    setCurrent, 
    addProduct,
    updateProduct, 
    setLimit,
    setIsOldest,
    setIsSortByAlphabetAtoZ,
    setPriceTo,
    setPriceFrom

} = actions;

export default reducer;