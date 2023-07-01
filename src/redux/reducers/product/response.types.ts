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
        deletedProduct: {
            images: {
                count: number
            },
            product: ServerProduct
        }
    },
    status: number
}

export type CreateProductResponse = {
    data: {
        createdProduct: ServerCreatedProduct
    },
    status: number
}