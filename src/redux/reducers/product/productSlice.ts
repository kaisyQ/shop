import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { PayloadAction } from "@reduxjs/toolkit";

import {
    getProduct, getProducts, deleteProduct, createProduct, getTopProducts, updateProduct as updateProductApi
} from "api/api";

import type { IProduct, LoadingType, SelectType, ServerCreatedProduct, ServerProduct, TopProduct } from "types/types";

import { IDLE, LOADING, FAILED } from "constants/constants";

import { SELECT_NEWEST } from "constants/constants";

import type {
    GetProductsResponse, GetProductResponse, DeleteProductResponse, CreateProductResponse, UpdateProductResponse
} from "./response.types";

import { getProductsWithCategoryParams } from "api/api";

interface IProductsInitialState {
    items: IProduct[],
    topProducts: TopProduct[]
    current: IProduct | null,
    loadingStatus: LoadingType,
    error: Error | null,
    selectorType: SelectType,
    searchValue: string,
    filterByTop: boolean
}

const initialState: IProductsInitialState = {
    items: [],
    topProducts: [],
    loadingStatus: IDLE,
    error: null,
    current: null,
    selectorType: SELECT_NEWEST,
    searchValue: "",
    filterByTop: false
}

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts", async (category: string | null | undefined) => {
        const response = await getProductsWithCategoryParams(category ? category : null);
        console.log(response.data);
        return {
            products: response.data.products.items ? response.data.products.items : response.data.products,
            status: response.status
        };
    }
);

export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (id: string) => {
        const response = await getProduct(id);
        return {
            product: response.data.product.items[0],
            status: response.status
        };
    }
);

export const fetchToDeleteProduct = createAsyncThunk(
    "products/fetchToDeleteProduct",
    async (id: string) => {
        const response = await deleteProduct(id);
        console.log(response.data)
        return {
            id: response.data.deletedProduct.id,
            status: response.status
        };
    }
);


export const fetchToCreateProduct = createAsyncThunk(
    "products/fetchToCreateProduct",
    async (formData: FormData) => {
        const response = await createProduct(formData);
        return {
            product: response.data.items[0],
            status: response.status
        };
    }
);

export const fetchToUpdateProduct = createAsyncThunk(
    "products/fetchToUpdateProduct",
    async ({ formData, id }: { formData: FormData, id: string }) => {
        const response = await updateProductApi(formData, id);

        console.log(response);
        return {
            product: response.data.items[0],
            status: response.status
        };
    }
);

export const fetchTopProducts = createAsyncThunk(
    "products/fetchTopProducts",
    async () => {
        const response = await getTopProducts();
        console.log(response)
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
        setSelectorType: (state, action: PayloadAction<SelectType>) => {
            state.selectorType = action.payload;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setFilteredByTop: (state, action: PayloadAction<boolean>) => {
            state.filterByTop = action.payload;
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
            state.items = action.payload.products.map((product: any) => {
                return {
                    id: product.id,
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


        builder.addCase(fetchProductById.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchProductById.fulfilled,
            (state, action) => {
                state.loadingStatus = IDLE;
                state.error = null;
                if (action.payload.status === 200) {
                    const product = action.payload.product;
                    state.current = {
                        id: product.id,
                        name: product.name,
                        delivery: product.aboutDelivery,
                        description: product.aboutProduct,
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
        builder.addCase(fetchProductById.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })


        builder.addCase(fetchToDeleteProduct.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToDeleteProduct.fulfilled,
            (state, action: PayloadAction<{ status: number, id: string }>) => {
                state.loadingStatus = IDLE;
                state.error = null;
                if (action.payload.status === 200) {
                    state.items = state.items.filter(product => product.id !== action.payload.id);
                }
            }
        )
        builder.addCase(fetchToDeleteProduct.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })



        builder.addCase(fetchToCreateProduct.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToCreateProduct.fulfilled,
            (state, action) => {
                state.loadingStatus = IDLE;
                state.error = null;


                if (action.payload.status === 200) {
                    state.items.push({
                        id: action.payload.product.id,
                        name: action.payload.product.name,
                        delivery: action.payload.product.aboutDelivery,
                        description: action.payload.product.aboutProduct,
                        count: action.payload.product.count,
                        price: action.payload.product.price,
                        discountPrice: action.payload.product.discountPrice,
                        createdAt: new Date(action.payload.product.createdAt),
                        params: {
                            Width: action.payload.product.width,
                            Height: action.payload.product.height,
                            Depth: action.payload.product.depth
                        },
                        imagesSrc: action.payload.product.images,
                        topOfTheWeek: action.payload.product.bestseller
                    })
                }
            }
        )
        builder.addCase(fetchToCreateProduct.rejected, (state, action) => {
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
                    imagesSrc: product.images,
                }))
            }
        })
        builder.addCase(fetchTopProducts.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })



        builder.addCase(fetchToUpdateProduct.pending, (state, action) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToUpdateProduct.fulfilled, (state, action) => {
            state.loadingStatus = IDLE;
            state.error = null;

            if (action.payload.status === 200) {
                state.items = state.items.filter((product => {
                    if (product.id !== action.payload.product.id) {
                        return product;
                    }
                    return {
                        id: action.payload.product.id,
                        name: action.payload.product.name,
                        delivery: action.payload.product.aboutDelivery,
                        description: action.payload.product.aboutProduct,
                        count: action.payload.product.count,
                        price: action.payload.product.price,
                        discountPrice: action.payload.product.discountPrice,
                        createdAt: new Date(action.payload.product.createdAt),
                        params: {
                            Width: action.payload.product.width,
                            Height: action.payload.product.height,
                            Depth: action.payload.product.depth
                        },
                        imagesSrc: action.payload.product.images,
                        topOfTheWeek: action.payload.product.bestseller
                    };
                }));
            }
        })
        builder.addCase(fetchToUpdateProduct.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
    }
})

const { actions, reducer } = productSlice;

export const {
    setCurrent, addProduct, removeProduct,
    updateProduct, setSelectorType, setSearchValue,
    setFilteredByTop
} = actions;

export default reducer;