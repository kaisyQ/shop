import HttpQuery from "./fetch.setup/fetch.setup";

export const getProducts = () => HttpQuery.get('products');
   
export const getTopProducts = () => HttpQuery.get("bestProducts");

export const getProduct = (id: string) => HttpQuery.get(`products/${id}`);

export const deleteProduct = (id: string) => HttpQuery.delete(`products/${id}`);

export const createProduct = (body: FormData) => HttpQuery.post("products", body);


export const getComments = () => HttpQuery.get("comments");

export const deleteComment = (id: string) => HttpQuery.delete(`comments/${id}`);

export const createComment = (body: any) => HttpQuery.post("comments", body, {
    "Content-Type": "application/json"
});

