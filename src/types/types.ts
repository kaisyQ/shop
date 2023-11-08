import { SELECT_OLDEST, SELECT_NEWEST } from "constants/constants";

import { LOADING, IDLE, FAILED } from "constants/constants";

import { ADMIN, EMPLOYEE } from "constants/constants";

export type LoadingType = typeof LOADING | typeof IDLE | typeof FAILED;

export type Images = {
    src: string,
    id: string
}

export type ServerProduct = {
    id: string,
    name: string,
    bestseller: boolean,
    about_delivery: string,
    about_product: string,
    count: number,
    price: number,
    discount_price: number,
    depth: string,
    height: string,
    width: string,
    images: Images[],
    created_at: string,
    updated_at: string,
}

export type ServerCreatedProduct = {
    id: string,
    name: string,
    bestseller: boolean,
    about_delivery: string,
    about_product: string,
    count: number,
    price: number,
    discount_price: number,
    depth: string,
    height: string,
    width: string,
    images: string[],
    created_at: string,
    updated_at: string,
}


export interface IShortProduct {
    id: string,
    name: string,
    count: number,
    price: number,
    topOfTheWeek: boolean,
    createdAt: Date
}

export type ProductLink = {
    imagesSrc: string[],
    slug: string,
    name: string,
    id: string
}


export interface IProduct extends IShortProduct {
    discountPrice: number,
    description: string,
    slug: string,
    params: {
        Width: string, 
        Height: string,
        Depth: string
    },
    delivery: string,
    imagesSrc: string[],
    createdAt: Date
}

export type ServerPost = {
    created_at: string,
    id: string,
    imagesSrc: Images[],
    text: string,
    title: string,
    updated_at: string
}


export interface IPost {
    id?: string,
    title: string,
    text: string,
    imagesSrc: string[],
}


export interface IPostWithDate {
    id: string,
    title: string,
    text: string,
    imagesSrc: string[],
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


export type ServerComment = {
    created_at: string,
    id: string,
    stars: number
    text: string,
    userName: string
}


export type Comment = {
    id: string,
    author: string,
    date: Date,
    text: string,
    rating:  RatingScore
}

export type SelectType = typeof SELECT_OLDEST |  typeof SELECT_NEWEST;