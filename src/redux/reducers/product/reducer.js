import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: [
        {
            id: 1,
            name: 'Cream 3 Seater Couch',
            count: 1,
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
                'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9603_750x.heic?v=1675043718',
                'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9604_750x.heic?v=1675043719',
                'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9607_750x.heic?v=1675043718',
                'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9610_750x.heic?v=1675043720'
            ]
        },
        {
            id: 3,
            name: 'Cream 3 Seater Couch',
            count: 0,
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
                'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9607_750x.heic?v=1675043718',
                'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9610_750x.heic?v=1675043720',
                'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9603_750x.heic?v=1675043718',
            ]
        },
        {
            id: 2,
            name: 'Cream 3 Seater Couch',
            count: 0,
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
                'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9610_750x.heic?v=1675043720'
            ]
        },
    ],
    current: {
        id: 2,
        name: 'Cream 3 Seater Couch',
        count: 0,
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
            'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9603_750x.heic?v=1675043718',
            'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9604_750x.heic?v=1675043719',
            'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9607_750x.heic?v=1675043718',
            'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9610_750x.heic?v=1675043720',
            'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9792_750x.heic?v=1675043117',
            'https://cdn.shopify.com/s/files/1/0554/3644/3786/products/IMG_9792_750x.heic?v=1675043117'
        ]
    },
    cartItems: [

    ]
}

const productSlice = createSlice({
    name: 'cartSlice',
    initialState, 
    reducers: {
        setCurrent: () => {
        },
        addCartItem: (state, action) => {
            
            const cartItem = state.cartItems.find(cartItem => cartItem.id === action.payload)

            if (cartItem) return

            const item = state.items.find(item => item.id === action.payload)

            state.cartItems.push({
                id: item.id, 
                name: item.name,
                count: 1,
                price: item.price,
                discountPrice: item.discountPrice,
                image: item.imagesSrc[0]
            })
        }
    }
})

const { actions, reducer } = productSlice

export const { setCurrent, addCartItem } = actions

export default reducer