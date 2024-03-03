import environment from './../environment';

export const LOADING = "LOADING";
export const IDLE = "IDLE";
export const FAILED = "FAILED";

export const MAX_PRODUCT_LIMIT = 9;
export const MEDIUM_PRODUCT_LIMIT = 6;
export const MIN_PRODUCT_LIMIT = 4;

export const API_URL = environment.imagesUrl;

export const CONTACT_CONFIRM_MESSAGE = `
    Are you sure you want to send this message? 
    Please double-check the information you've provided before proceeding. 
    Once the message is sent, it cannot be recalled !
`;


export const OK = 'STATUS/OK';
export const ERROR = 'STATUS/ERROR';