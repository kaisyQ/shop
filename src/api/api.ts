import HttpQuery from "./fetch.setup/fetch.setup";

export const getProducts = () => HttpQuery.get('products');
   
export const getTopProducts = () => HttpQuery.get("bestProducts");

export const getProduct = (id: string) => HttpQuery.get(`products/${id}`);

export const deleteProduct = (id: string) => HttpQuery.delete(`products/${id}`);

export const createProduct = (body: FormData) => HttpQuery.post("products", body);

export const updateProduct = (body: FormData) => HttpQuery.put("products", body)


export const getComments = () => HttpQuery.get("comments");

export const deleteComment = (id: string) => HttpQuery.delete(`comments/${id}`);

export const createComment = (body: any) => HttpQuery.post("comments", body, {
    "Content-Type": "application/json"
});


export const login = (body: any) => HttpQuery.post("auth", body, {
    "Content-Type": "application/json"
});

export const logout = () => HttpQuery.delete("auth");

export const checkMe = () => HttpQuery.get("auth");



export const getPosts = () => HttpQuery.get("posts");

export const getPost = (id: string) => HttpQuery.get(`posts/${id}`);

export const deletePost = (id: string) => HttpQuery.delete(`posts/${id}`);

export const createPost = (body: any) => HttpQuery.post("posts", body);

export const updatePost = (body: any) => HttpQuery.put("posts", body);
