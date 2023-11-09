import { API_URL } from "constants/constants";
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

export const getCategories = () => instance.get("/categories/");

export const getProduct = (slug: string) => instance.get(`/products/${slug}`)

export const getProductsWithParams = (limit: number, categorySlug?: string, page?: string) => {

    const params: Record<string, string> = {
        limit: limit.toString()
    }

    if (categorySlug) {
        params.category = categorySlug;
    }

    if (page) {
        params.page = page;
    }

    return instance.get(`products/?${(new URLSearchParams(params)).toString()}`)
}

export const getTopProducts = () => instance.get("/bestsellers/");

export const getComments = () => instance.get("comments/")

export const createComment = (username: string, text: string, stars: number) => instance.post("comments/create", {
    username,
    text,
    stars
});