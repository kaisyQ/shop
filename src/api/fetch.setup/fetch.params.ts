import type { HttpQueryOptionsType, HeadersType } from "./fetch.types"


export const withoutBodyHeaders: HeadersType = {
    "Content-Type": "application/json"
}

const options: HttpQueryOptionsType = {
    //baseUrl: "https://bmfurniture.ca/api/",
    baseUrl: "http://localhost:8000/api/v1/",
    credentials: "include",
}

export default options;
