import type { HttpQueryOptionsType, HeadersType } from "./fetch.types"


export const withoutBodyHeaders: HeadersType = {
    "Content-Type": "application/json"
}

const options: HttpQueryOptionsType = {
    baseUrl: "https://198.245.55.24/api/",
    credentials: "include",
}

export default options;
