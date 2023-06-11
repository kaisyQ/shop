export const LOADING = "LOADING";
export const IDLE = "IDLE";
export const FALED = "FALED";

export type LoadingType = typeof LOADING | typeof IDLE | typeof FALED;

export interface IShortProduct {
    id: number,
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
    imagesSrc: string[]
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


export enum Roles {
    ADMIN,
    EMPLOYEE
}

export interface IShortUser {
    login: string,
    password: string,
}

export interface IUser {
    id: string,
    login: string,
    password: string,
    role: Roles
}