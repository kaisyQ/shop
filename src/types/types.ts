
export interface IProduct {
    id: number,
    name: string,
    count: number,
    price: number,
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