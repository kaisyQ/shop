import HttpQuery from "./fetch.setup/fetch.setup";

export const getProducts = () => HttpQuery.get('products');
   
export const getTopProducts = () => HttpQuery.get("bestProducts");

export const getProduct = (id: string) => HttpQuery.get(`products/${id}`);

export const deleteProduct = (id: string) => HttpQuery.delete(`products/delete/${id}`);

export const createProduct = (body: FormData) => HttpQuery.post("products/create", body);

export const updateProduct = (body: FormData, id: string) => HttpQuery.put(`products/update/${id}`, body)


export const getComments = () => HttpQuery.get("comments");

export const deleteComment = (id: string) => HttpQuery.delete(`comments/delete/${id}`);

export const createComment = (body: any) => HttpQuery.post("comments/create", body, {
    "Content-Type": "application/json"
});


export const login = (body: any) => HttpQuery.post("auth/login", body, {
    "Content-Type": "application/json"
});

export const logout = () => HttpQuery.delete("auth/logout");

export const checkMe = () => HttpQuery.get("auth/checkMe");



export const getPosts = () => HttpQuery.get("posts");

export const getPost = (id: string) => HttpQuery.get(`posts/${id}`);

export const deletePost = (id: string) => HttpQuery.delete(`posts/delete/${id}`);

export const createPost = (body: any) => HttpQuery.post("posts/create", body);

export const updatePost = (body: any, id: string) => HttpQuery.put(`posts/update/${id}`, body);

