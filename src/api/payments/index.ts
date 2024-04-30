import { instance } from "api/api"

export const pay = (data: any) => instance.get("/payment/", {...data})