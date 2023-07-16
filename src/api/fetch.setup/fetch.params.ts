import type { HttpQueryOptionsType, HeadersType } from "./fetch.types"


export const withoutBodyHeaders: HeadersType = {
    "Content-Type": "application/json"
}

const options: HttpQueryOptionsType = {
    baseUrl: "https://bmfurniture.ca/api/",
    credentials: "include",
}

export default options;
