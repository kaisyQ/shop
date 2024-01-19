import { MIN_PRODUCT_LIMIT, MAX_PRODUCT_LIMIT, MEDIUM_PRODUCT_LIMIT } from "constants/constants";

import { LOADING, IDLE, FAILED } from "constants/constants";

export type LoadingType = typeof LOADING | typeof IDLE | typeof FAILED;

export type ProductsLimit = typeof MAX_PRODUCT_LIMIT | typeof MEDIUM_PRODUCT_LIMIT | typeof MIN_PRODUCT_LIMIT;

export type RatingScore = 1 | 2 | 3 | 4 | 5;
