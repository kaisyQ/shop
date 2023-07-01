import type { HttpQueryOptionsType, HeadersType } from "./fetch.types"

export const withoutBodyHeaders: HeadersType = {
    "Content-Type": "application/json"
}

const options: HttpQueryOptionsType = {
    baseUrl: "http://localhost:8000/",
    credentials: "include",
}

export default options;
