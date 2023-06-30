import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { PayloadAction } from "@reduxjs/toolkit";

import { getProducts, getProduct } from "api/api";


import { 
    IProduct, ServerProduct, LoadingType, IDLE, LOADING, FAILED, SelectType
} from "types/types";

import { SELECT_NEWEST } from "constants/constants";


interface IProductsInitialState {
    items: IProduct[],
    current: IProduct | null,
    loadingStatus: LoadingType,
    error: Error | null,
    selectorType: SelectType,
    searchValue: string
}

const initialState : IProductsInitialState = {
    items: [],
    loadingStatus: IDLE,
    error: null,
    current: null,
    selectorType: SELECT_NEWEST,
    searchValue: ""
}

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts", async () => {
        try {
            const response = await getProducts();
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const fetchProductById = createAsyncThunk(
    "products/fetchProductById", 
    async (id: string) => {
        try {
            const response = await getProduct(id);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const fetchToDeleteProduct = createAsyncThunk(
    "products/fetchToDeleteProduct", 
    async (id: string) => {
        try {
            const response = await fetch(`http://localhost:8000/products/${id}`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-type": "application/json"
                }
            })
            const data = await response.json();
            return {
                product: data.deletedProduct,
                status: response.status
            };
        } catch (error) {
            console.log(error);
        }
    }
);


export const fetchToCreateProduct = createAsyncThunk(
    "products/fetchToCreateProduct", 
    async (formData: FormData) => {
        try {
            const response = await fetch("http://localhost:8000/products", {
                method: "POST", 
                body: formData,
                credentials: "include"
            });
            const data = await response.json();

            const result = {
                product: data.createdProduct as ServerProduct,
                status: response.status
            }
            return result;
        } catch (error) {
            console.log(error);
        }
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
        updateProduct:(state, action: PayloadAction<IProduct>) => {
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<{products: ServerProduct[]}>) => {
            state.loadingStatus = IDLE;
            state.error = null;
            state.items = action.payload.products.map(product => {
                return {
                    id: product.id,
                    name: product.name,
                    delivery: product.about_delivery,
                    description: product.about_product,
                    count: product.count,
                    price: product.price,
                    discountPrice: product.discount_price,
                    params: {
                        Width: product.width,
                        Height: product.height,
                        Depth: product.depth
                    },
                    createdAt: new Date(product.created_at),
                    imagesSrc: product.images.map(img => img.src)
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
            (state, action: PayloadAction<{ product: ServerProduct }>) => {
                state.loadingStatus = IDLE;
                state.error = null;
                const product = action.payload.product;
                state.current = {
                    id: product.id,
                    name: product.name,
                    delivery: product.about_delivery,
                    description: product.about_product,
                    count: product.count,
                    price: product.price,
                    discountPrice: product.discount_price,
                    createdAt: new Date(product.created_at),
                    params: {
                        Width: product.width,
                        Height: product.height,
                        Depth: product.depth
                    },
                    imagesSrc: product.images.map(img => img.src)
                } as IProduct;
        })
        builder.addCase(fetchProductById.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })


        builder.addCase(fetchToDeleteProduct.pending, (state) => {
            state.loadingStatus = LOADING;
            state.error = null;
        })
        builder.addCase(fetchToDeleteProduct.fulfilled, 
            (state, action: PayloadAction<any>) => {
                state.loadingStatus = IDLE;
                state.error = null;
                if (action.payload.status === 200) {
                    state.items = state.items.filter(product => product.id !== action.payload.product.id);
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
            (state, action: PayloadAction<any>) => {
                state.loadingStatus = IDLE;
                state.error = null;
                if (action.payload.status === 200) {
                    state.items.push({
                        id: action.payload.product.id,
                        name: action.payload.product.name,
                        delivery: action.payload.product.about_delivery,
                        description: action.payload.product.about_product,
                        count: action.payload.product.count,
                        price: action.payload.product.price,
                        discountPrice: action.payload.product.discount_price,
                        createdAt: new Date(action.payload.product.created_at),
                        params: {
                            Width: action.payload.product.width,
                            Height: action.payload.product.height,
                            Depth: action.payload.product.depth
                        },
                        imagesSrc: action.payload.product.images.map((img: any) => img.src)
                    })
                }
            }
        )
        builder.addCase(fetchToCreateProduct.rejected, (state, action) => {
            state.loadingStatus = FAILED;
        })
    }
})

const { actions, reducer } = productSlice;

export const { 
    setCurrent, addProduct, removeProduct, 
    updateProduct, setSelectorType, setSearchValue 
} = actions;

export default reducer;