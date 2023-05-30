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



export interface IBlogType {
    id: number,
    title: string,
    text: string,
    imageSrc: string,
    date: string
}


export enum Roles {
    ADMIN,
    EMPLOYEE
}

export interface IUser {
    id: number,
    login: string
    role: Roles
}