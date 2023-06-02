import { createSlice } from "@reduxjs/toolkit";

import { PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "types/types";


interface IProductsInitialState {
    items: IProduct[],
    current: IProduct,
}


const initialState : IProductsInitialState = {
    items: [
        {
            id: 1,
            name: 'Cream 3 Seater Couch',
            count: 3,
            price: 1500,
            discountPrice: 1200,
            description: `New couch prices got you down? TwoGuys-OneCouch is here to save the day!
                If you are looking for a great-condition couch at a fraction of retail cost, we are your one-stop shop!
                Through our extensive cleaning and reconditioning process we can provide our clients with a Near-New couch experience while saving them money as well!
                Here are the details of this particular couch:
            `,
            params: {
                Width: '283 cm',
                Height: '84 cm',
                Depth: '160 cm'
            },
            delivery: `Delivery is included for the GTA, further distances will incur a delivery charge.
                We aim to satisfy every client to the highest of our ability, we hope you enjoy your experience shopping with us
            `,
            imagesSrc: [
                'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            ]
        },
        {
            id: 3,
            name: 'Cream 3 Seater Couch',
            count: 2,
            price: 1300,
            discountPrice: 1000,
            description: `New couch prices got you down? TwoGuys-OneCouch is here to save the day!
                If you are looking for a great-condition couch at a fraction of retail cost, we are your one-stop shop!
                Through our extensive cleaning and reconditioning process we can provide our clients with a Near-New couch experience while saving them money as well!
                Here are the details of this particular couch:
            `,
            params: {
                Width: '283 cm',
                Height: '84 cm',
                Depth: '160 cm'
            },
            delivery: `Delivery is included for the GTA, further distances will incur a delivery charge.
                We aim to satisfy every client to the highest of our ability, we hope you enjoy your experience shopping with us
            `,
            imagesSrc: [
                'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            ]
        },
        {
            id: 2,
            name: 'Cream 3 Seater Couch',
            count: 1,
            price: 1300,
            discountPrice: 1000,
            description: `New couch prices got you down? TwoGuys-OneCouch is here to save the day!
                If you are looking for a great-condition couch at a fraction of retail cost, we are your one-stop shop!
                Through our extensive cleaning and reconditioning process we can provide our clients with a Near-New couch experience while saving them money as well!
                Here are the details of this particular couch:
            `,
            params: {
                Width: '283 cm',
                Height: '84 cm',
                Depth: '160 cm'
            },
            delivery: `Delivery is included for the GTA, further distances will incur a delivery charge.
                We aim to satisfy every client to the highest of our ability, we hope you enjoy your experience shopping with us
            `,
            imagesSrc: [
                'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            ]
        },
        {
            id: 2,
            name: 'Cream 3 Seater Couch',
            count: 1,
            price: 1300,
            discountPrice: 1000,
            description: `New couch prices got you down? TwoGuys-OneCouch is here to save the day!
                If you are looking for a great-condition couch at a fraction of retail cost, we are your one-stop shop!
                Through our extensive cleaning and reconditioning process we can provide our clients with a Near-New couch experience while saving them money as well!
                Here are the details of this particular couch:
            `,
            params: {
                Width: '283 cm',
                Height: '84 cm',
                Depth: '160 cm'
            },
            delivery: `Delivery is included for the GTA, further distances will incur a delivery charge.
                We aim to satisfy every client to the highest of our ability, we hope you enjoy your experience shopping with us
            `,
            imagesSrc: [
                'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            ]
        },
        {
            id: 2,
            name: 'Cream 3 Seater Couch',
            count: 1,
            price: 1300,
            discountPrice: 1000,
            description: `New couch prices got you down? TwoGuys-OneCouch is here to save the day!
                If you are looking for a great-condition couch at a fraction of retail cost, we are your one-stop shop!
                Through our extensive cleaning and reconditioning process we can provide our clients with a Near-New couch experience while saving them money as well!
                Here are the details of this particular couch:
            `,
            params: {
                Width: '283 cm',
                Height: '84 cm',
                Depth: '160 cm'
            },
            delivery: `Delivery is included for the GTA, further distances will incur a delivery charge.
                We aim to satisfy every client to the highest of our ability, we hope you enjoy your experience shopping with us
            `,
            imagesSrc: [
                'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
                'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
                'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
                'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
                'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
                'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            ]
        },
        {
            id: 2,
            name: 'Cream 3 Seater Couch',
            count: 1,
            price: 1300,
            discountPrice: 1000,
            description: `New couch prices got you down? TwoGuys-OneCouch is here to save the day!
                If you are looking for a great-condition couch at a fraction of retail cost, we are your one-stop shop!
                Through our extensive cleaning and reconditioning process we can provide our clients with a Near-New couch experience while saving them money as well!
                Here are the details of this particular couch:
            `,
            params: {
                Width: '283 cm',
                Height: '84 cm',
                Depth: '160 cm'
            },
            delivery: `Delivery is included for the GTA, further distances will incur a delivery charge.
                We aim to satisfy every client to the highest of our ability, we hope you enjoy your experience shopping with us
            `,
            imagesSrc: [
                'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            ]
        },
        {
            id: 2,
            name: 'Cream 3 Seater Couch',
            count: 1,
            price: 1300,
            discountPrice: 1000,
            description: `New couch prices got you down? TwoGuys-OneCouch is here to save the day!
                If you are looking for a great-condition couch at a fraction of retail cost, we are your one-stop shop!
                Through our extensive cleaning and reconditioning process we can provide our clients with a Near-New couch experience while saving them money as well!
                Here are the details of this particular couch:
            `,
            params: {
                Width: '283 cm',
                Height: '84 cm',
                Depth: '160 cm'
            },
            delivery: `Delivery is included for the GTA, further distances will incur a delivery charge.
                We aim to satisfy every client to the highest of our ability, we hope you enjoy your experience shopping with us
            `,
            imagesSrc: [
                'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            ]
        },
    ],
    current: {
        id: 2,
        name: 'Cream 3 Seater Couch',
        count: 1,
        price: 1300,
        discountPrice: 1000,
        description: `New couch prices got you down? TwoGuys-OneCouch is here to save the day!
            If you are looking for a great-condition couch at a fraction of retail cost, we are your one-stop shop!
            Through our extensive cleaning and reconditioning process we can provide our clients with a Near-New couch experience while saving them money as well!
            Here are the details of this particular couch:
        `,
        params: {
            Width: '283 cm',
            Height: '84 cm',
            Depth: '160 cm'
        },
        delivery: `Delivery is included for the GTA, further distances will incur a delivery charge.
            We aim to satisfy every client to the highest of our ability, we hope you enjoy your experience shopping with us
        `,
        imagesSrc: [
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
            'https://sun9-52.userapi.com/c844416/v844416994/1e3883/x4ySZTmBMKw.jpg',
        ]
    }
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState, 
    reducers: {
        setCurrent: (state, action: PayloadAction<number>) => {
            
        },
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.items.push(action.payload);
        },
        updateProduct:(state, action: PayloadAction<IProduct>) => {
            state.items = state.items.filter(product => {
                if (product.id !== action.payload.id) {
                    return product;
                }
                return {
                    ...product,
                    ...action.payload
                }
            })
        },
        removeProduct:(state, action: PayloadAction<number>) => {
            state.items = state.items.filter(product => product.id !== action.payload);
        }
    }
})

const { actions, reducer } = productSlice;

export const { setCurrent, addProduct, removeProduct, updateProduct } = actions;

export default reducer;