import { API_URL } from "constants/constants";
import HttpQuery from "./fetch.setup/fetch.setup";
import axios from 'axios';


const instance = axios.create(
    {
        //baseURL: "https://bmfurniture.ca/api/v1/",
        baseURL: 'http://localhost:8000/api/v1/',
    }
);

export const sellCouch = (name: string, email: string, phone: string, message: string, brand: string) => instance.post('/mailer/sell_couch', {
    name,
    email,
    phone,
    brand,
    message,
});

export const contactUs = (name: string, email: string, phone: string, message: string) => instance.post('/mailer/contact_us', {
    name,
    email,
    phone,
    message,
});

export const search = (query: string) => instance.get(`/search/${query}`)

export const getCategories = () => instance.get("/categories");

export const getProduct = (slug: string) => instance.get(`/products/${slug}`)

export const getProductsWithCategoryParams = (categorySlug: string | null) => instance.get(
    categorySlug ? `products?category=${categorySlug}` : 'products'
);

export const getTopProducts = () => instance.get("products/?bestseller=true");

export const getComments = () => instance.get("comments")

export const createComment = (username: string, text: string, stars: number) => instance.post("comments/create", {
    username,
    text,
    stars
});