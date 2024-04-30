import { instance } from "api/api";

export const getCategories = () => instance.get("/categories/");

