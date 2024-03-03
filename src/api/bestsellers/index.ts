import { instance } from "api/api";


export const getTopProducts = () => instance.get("/bestsellers/");