import type { HttpQueryOptionsType, HeadersType } from "./fetch.types"


export const withoutBodyHeaders: HeadersType = {
    "Content-Type": "application/json"
}

const options: HttpQueryOptionsType = {
    baseUrl: "https://sofas-6bfb2aa4dea9.herokuapp.com/",
    credentials: "include",
}

export default options;
