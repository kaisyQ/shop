export type HeadersType = {
    "Content-Type": string,
    'Accept': string,
    'Access-Control-Allow-Origin': string | string[],
    'Access-Control-Allow-Credentials': string
}


export type HttpQueryOptionsType = {
    baseUrl: string,
    credentials: RequestCredentials,
}