import { IProduct } from "types/types";

const SET_NAME = 'PRODUCT-EDIT/SET_NAME';
const SET_ABOUT_PRODUCT = "PRODUCT-EDIT/SET_ABOUT_PRODUCT";
const SET_PRICE = "PRODUCT-EDIT/SET_PRICE";
const SET_DISCOUNT_PRICE = "PRODUCT-EDIT/SET_DISCOUNT_PRICE";
const SET_WIDTH = "PRODUCT-EDIT/SET_WIDTH";
const SET_HEIGHT = "PRODUCT-EDIT/SET_HEIGHT";
const SET_DEPTH = "PRODUCT-EDIT/SET_DEPTH";
const SET_ABOUT_DELIVERY = "PRODUCT-EDIT/SET_ABOUT_DELIVERY";
const SET_IMAGES_SRC = "PRODUCT-EDIT/SET_IMAGES";
const SET_IMAGES_FILES = "PRODUCT-EDIT/SET_IMAGES_FILES";
const ADD_IMAGE = "PRODUCT-EDIT/ADD_IMAGE";
const SET_TOP_OF_THE_WEEK = "PRODUCT-EDIT/SET_TOP_OF_THE_WEEK";
const SET_COUNT = "PRODUCT-EDIT/SET_COUNT";
const SET_CATEGORY_SLUG = "PRODUCT-EDIT/SET_CATEGORY_SLUG";

export type InitialStateType = {
    name: string,
    aboutProduct: string,
    aboutDelivery: string,
    price: string,
    discountPrice: string,
    width: string,
    height: string,
    depth: string,
    imagesSrc: string[] | null,
    imagesFiles: File[] | null,
    topOfTheWeek: boolean,
    count: string,
    categorySlug: string
};

export const initialState: InitialStateType= {
    name: "",
    aboutProduct: "",
    aboutDelivery: "",
    price: "",
    discountPrice: "",
    width: "",
    height: "",
    depth: "",
    imagesSrc: null,
    imagesFiles: null,
    topOfTheWeek: false,
    count: '1',
    categorySlug: ""
};


const setName = (payload: string) => ({
    type: SET_NAME as typeof SET_NAME,
    payload: payload
});

const setAboutProduct = (payload: string) => ({
    type: SET_ABOUT_PRODUCT as typeof SET_ABOUT_PRODUCT,
    payload: payload
});

const setAboutDelivery = (payload: string) => ({
    type: SET_ABOUT_DELIVERY as typeof SET_ABOUT_DELIVERY,
    payload: payload
});

const setPrice = (payload: string) => ({
    type: SET_PRICE as typeof SET_PRICE,
    payload: payload
});

const setDiscountPrice = (payload: string) => ({
    type: SET_DISCOUNT_PRICE as typeof SET_DISCOUNT_PRICE,
    payload: payload
});


const setWidth = (payload: string) => ({
    type: SET_WIDTH as typeof SET_WIDTH,
    payload: payload
});

const setHeight = (payload: string) => ({
    type: SET_HEIGHT as typeof SET_HEIGHT,
    payload: payload
});

const setDepth = (payload: string) => ({
    type: SET_DEPTH as typeof SET_DEPTH,
    payload: payload
});

const setImagesSrc = (payload: string[] | null) => ({
    type: SET_IMAGES_SRC as typeof SET_IMAGES_SRC,
    payload: payload
});

const setImagesFiles = (payload: File[] | null) => ({
    type: SET_IMAGES_FILES as typeof SET_IMAGES_FILES,
    payload: payload
});


const addImagesWithFile = (payload: { files: File[], images: string[] }) => ({
    type: ADD_IMAGE as typeof ADD_IMAGE,
    payload: payload
});

export const setTopOfTheWeek = (payload: boolean) => ({
    type: SET_TOP_OF_THE_WEEK as typeof SET_TOP_OF_THE_WEEK,
    payload: payload
});


const setCount = (payload: string) => ({
    type: SET_COUNT as typeof SET_COUNT,
    payload: payload
});

const setCategorySlug = (payload: string) => ({
    type: SET_CATEGORY_SLUG as typeof SET_CATEGORY_SLUG,
    payload: payload
})

type SetNameType = ReturnType<typeof setName>;
type SetAboutDeliveryType = ReturnType<typeof setAboutDelivery>;
type SetAboutProductType = ReturnType<typeof setAboutProduct>;
type SetPriceType = ReturnType<typeof setPrice>;
type SetDiscountPriceType = ReturnType<typeof setDiscountPrice>;
type SetWidthType = ReturnType<typeof setWidth>;
type SetHeightType = ReturnType<typeof setHeight>;
type SetDepthType = ReturnType<typeof setDepth>;
type SetImagesSrcType = ReturnType<typeof setImagesSrc>;
type SetImagesFilesType = ReturnType<typeof setImagesFiles>;
type AddImageWithFileType = ReturnType<typeof addImagesWithFile>;
type SetTopOfTheWeek = ReturnType<typeof setTopOfTheWeek>;
type SetCountType = ReturnType<typeof setCount>;
type SetCategorySlug = ReturnType<typeof setCategorySlug>;


export type ActionType = SetNameType | SetAboutDeliveryType | SetAboutProductType |
    SetPriceType | SetPriceType | SetDiscountPriceType | SetWidthType | SetHeightType |
    SetDepthType | SetImagesSrcType | SetImagesFilesType | AddImageWithFileType |
    SetTopOfTheWeek | SetCountType | SetCategorySlug;


export type ProductsDispatchType = React.Dispatch<ActionType>;

export const actions = {
    setName, setAboutDelivery, setAboutProduct, 
    setPrice, setDiscountPrice, setWidth, setHeight, 
    setDepth, setImagesSrc, setImagesFiles, addImagesWithFile,
    setTopOfTheWeek, setCount, setCategorySlug
};


const reducer = (state: InitialStateType, action: ActionType) => {
    switch(action.type) {
        case SET_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case SET_ABOUT_PRODUCT: 
            return {
                ...state,
                aboutProduct: action.payload
            }
        case SET_ABOUT_DELIVERY: 
            return {
                ...state,
                aboutDelivery: action.payload
            }
        case SET_PRICE: 
            return {
                ...state,
                price: action.payload
            }
        case SET_DISCOUNT_PRICE: 
            return {
                ...state,
                discountPrice: action.payload
            }
        case SET_WIDTH: 
            return {
                ...state,
                width: action.payload
            }
        case SET_HEIGHT: 
            return {
                ...state,
                height: action.payload
            }
        case SET_DEPTH: 
            return {
                ...state,
                depth: action.payload
            }
        case SET_IMAGES_SRC: 
            return {
                ...state,
                imagesSrc: action.payload
            }
        case SET_IMAGES_FILES: 
            return {
                ...state,
                imagesFiles: action.payload
            }
        case ADD_IMAGE: 
            return {
                ...state,
                
                imagesSrc: state.imagesSrc ? 
                    [...state.imagesSrc, ...action.payload.images] : 
                    [...action.payload.images],

                imagesFiles: state.imagesFiles ? 
                    [...state.imagesFiles, ...action.payload.files] : 
                    [...action.payload.files]
            }
        case SET_TOP_OF_THE_WEEK: 
            return {
                ...state,
                topOfTheWeek: action.payload
            }
        case SET_COUNT: 
            return {
                ...state,
                count: action.payload
            }
        case SET_CATEGORY_SLUG: {
            console.log(action.payload)
            return {
                ...state,
                categorySlug: action.payload
            }
        }
        default: 
            throw new Error("BAD ACTION TYPE!");
    }
}

export default reducer;