import type { ServerProduct, ServerCreatedProduct } from "types/types"

export type GetProductsResponse = {
    data: {
        products: ServerProduct[]
    },
    status: number
}


export type GetProductResponse = {
    data: {
        product: ServerProduct
    },
    status: number
}

export type DeleteProductResponse = {
    data: {
        deletedProduct: ServerProduct
        
    },
    status: number
}

export type CreateProductResponse = {
    data: {
        createdProduct: ServerProduct
    },
    status: number
}

export type UpdateProductResponse = {
    data: {
        updatedProduct: ServerProduct
    },
    status: number
}