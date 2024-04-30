import { instance } from "api/api";

export const search = (query: string) => instance.get(`/search/${query}`)
