import axios from 'axios';
import type { CreateCommentDto } from 'dto/CreateCommentDto';

const instance = axios.create(
    {
        baseURL: "https://bmfurniture.ca/api/v1/",
        //baseURL: 'http://localhost:8000/api/v1/',
    }
);

export const sellCouch = 
    (name: string, email: string, phone: string, message: string, brand: string, files: FileList | null) => {
        const formData = new FormData();

        if (files) {
            Array.from(files).forEach(file => {
                formData.append('uploaded_images[]', file);
            });
        }

        formData.append('body', JSON.stringify({
            name,
            email,
            phone,
            brand,
            message,
        }));

        return instance.post('/mailer/sell_couch', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
};

export const contactUs = (name: string, email: string, phone: string, message: string) => instance.post('/mailer/contact_us', {
    name,
    email,
    phone,
    message,
});

export const search = (query: string) => instance.get(`/search/${query}`)

export const getCategories = () => instance.get("/categories/");

export const getProduct = (slug: string) => instance.get(`/products/${slug}`)

export const getProductsWithParams = (
    limit: number, 
    isOldest: boolean,
    isSortByAlphabetAtoZ: boolean,
    categorySlug?: string, 
    page?: string,
    priceFrom?: number,
    priceTo?: number,
) => {

    const params: Record<string, string> = {
        limit: limit.toString(),
    }

    if (categorySlug) {
        params.category = categorySlug;
    }

    if (page) {
        params.page = page;
    }
    
    if (isOldest) {
        params.oldest = 'true';
        params.newest = 'false';
    } else {
        params.oldest = 'false';
        params.newest = 'true';
    }

    if (isSortByAlphabetAtoZ) {
        params.alphabetAtoZ = 'true';
        params.alphabetZtoA = 'false';
    } else {
        params.alphabetAtoZ = 'false';
        params.alphabetZtoA = 'true';
    }

    if (priceFrom) {
        params.priceFrom = priceFrom.toString();
    }

    if (priceTo) {
        params.priceTo = priceTo.toString();
    }


    return instance.get(`products/?${(new URLSearchParams(params)).toString()}`)
}

export const getTopProducts = () => instance.get("/bestsellers/");

export const getComments = () => instance.get("comments/")

export const createComment = (comment: CreateCommentDto) => instance.post("comments/create", {
    username: comment.username,
    text: comment.text,
    stars: comment.stars
});