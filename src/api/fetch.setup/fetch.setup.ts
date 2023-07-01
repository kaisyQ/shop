import type { HttpQueryOptionsType, HeadersType } from "./fetch.types";

import options, { withoutBodyHeaders } from "./fetch.params";


class HttpQuery { 
    
    private __options: HttpQueryOptionsType;

    constructor (options: HttpQueryOptionsType) {
        this.__options = options;
    }


    get = async (url: string) => {
        try {
            const { baseUrl, ...options } = this.__options;
            
            const response = await fetch(`${baseUrl}${url}`, {
                method: "GET",
                credentials: options.credentials,
                headers: withoutBodyHeaders
            });

            const data = await response.json();
            
            return {
                data,
                status: response.status
            };
        } catch (err) {
            console.error(err);
            return {
                data: null,
                status: 500
            };
        }
    }

    post = async (url: string, body: any, headers?: HeadersType) => {
        try {
            const { baseUrl, ...options } = this.__options;

            const response = await fetch(`${baseUrl}${url}`, {
                method: "POST",
                credentials: options.credentials,
                headers: headers,
                body: body
            });

            const data = await response.json();
            
            return {
                data,
                status: response.status
            };
        } catch (err) {
            console.error(err);
            return {
                data: null,
                status: 500
            };
        }
    }

    put = async (url: string, body: any, headers?: HeadersType) => {
        try {
            const { baseUrl, ...options } = this.__options;

            const response = await fetch(`${baseUrl}${url}`, {
                method: "PUT",
                credentials: options.credentials,
                headers: headers,
                body: body
            });

            const data = await response.json();
            
            return {
                data,
                status: response.status
            };
        } catch (err) {
            console.error(err);
            return {
                data: null,
                status: 500
            };
        }
    }

    delete = async (url: string) => {
        try {
            const { baseUrl, ...options } = this.__options;

            const response = await fetch(`${baseUrl}${url}`, {
                method: "DELETE",
                credentials: options.credentials,
                headers: withoutBodyHeaders
            });

            const data = await response.json();
            
            return {
                data,
                status: response.status
            };
        } catch (err) {
            console.error(err);
            return {
                data: null,
                status: 500
            };
        }
    }
}

export default new HttpQuery(options);