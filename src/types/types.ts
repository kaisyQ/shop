export const LOADING = "LOADING";
export const IDLE = "IDLE";
export const FAILED = "FAILED";


export const ADMIN = "TYPES/ADMIN";
export const EMPLOYEE = "TYPES/EMPLOYEE";

export type LoadingType = typeof LOADING | typeof IDLE | typeof FAILED;

export type ServerProduct = {
    id: string,
    name: string,
    about_delivery: string,
    about_product: string,
    count: number,
    price: number,
    discount_price: number,
    depth: string,
    height: string,
    width: string,
    images: {src: string, id: string} [],
    created_at: string,
    updated_at: string,
}


export interface IShortProduct {
    id: string,
    name: string,
    count: number,
    price: number
}


export interface IProduct extends IShortProduct {
    discountPrice: number,
    description: string,
    params: {
        Width: string, 
        Height: string,
        Depth: string
    },
    delivery: string,
    imagesSrc: string[],
    createdAt: Date
}


export interface IPost {
    id?: string,
    title: string,
    text: string,
    imageSrc: string,
}



export interface IPostWithDate {
    id: string,
    title: string,
    text: string,
    imageSrc: string,
    date: Date
}


export type Role = typeof ADMIN | typeof EMPLOYEE;

export interface IShortUser {
    login: string,
    password: string,
}

export interface IUser {
    id: string,
    login: string,
    password: string,
    role: Role
}

export type RatingScore = 1 | 2 | 3 | 4 | 5;

export interface IComment {
    id: string,
    author: string,
    date: Date,
    text: string,
    rating:  RatingScore
}