import { instance } from "api/api";

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