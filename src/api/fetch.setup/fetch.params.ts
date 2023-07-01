import { HttpQueryOptionsType } from "./fetch.types"

const options: HttpQueryOptionsType = {
    baseUrl: "http://localhost:8000/",
    credentials: "include",
    headers: {
        "Content-Type": "application/json, multipart/form-data"
    }
}

export default options;
