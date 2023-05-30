import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IBlogType } from "types/types";

interface IBlogsInitialState {
    items: IBlogType[],
    current: null | IBlogType
}

const initialState: IBlogsInitialState = {
    items: [
        {
            id: 1,
            title: '1NASA Has Found Hundreds Of Potential New Planets',
            text: `loremNASA released a list of 219 new 
                text candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            imageSrc: 'https://www.mebelbspb.ru/images/tovar/cover3671.jpg'
            ,date: '21'
        },
        {
            id: 2,
            title: '2NASA Has Found Hundreds Of Potential New Planets',
            text: `loremNASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            imageSrc: 'https://bestmebelik.ru/UserFiles/Image/Pasha-stati/raskl_meh_var3.jpg'
            ,date: '21'
        },
        {
            id: 3,
            title: '3NASA Has Found Hundreds Of Potential New Planets',
            text: `loremNASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            imageSrc: 'https://www.anderssen.ru/upload/iblock/d1c/d1c3fff1edab2eb988a7841d60814d0d.jpg'
            ,date: '21'
        },
        {
            id: 4,
            title: '4NASA Has Found Hundreds Of Potential New Planets',
            text: `loremNASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            imageSrc: 'https://mebel.ru/upload/iblock/1f2/g6vd0clhvjdwg39o66adv82km3ihxhl5.jpg'
            ,date: '21'
        },
        {
            id: 5,
            title: '5NASA Has Found Hundreds Of Potential New Planets',
            text: `loremNASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            imageSrc: 'https://f-storespb.ru/upload/resize_cache/iblock/063/662_475_1/a4dorynum0sb1rjzxj838mer5qd7696i.jpg'
            ,date: '21'
        },
        {
            id: 6,
            title: '6NASA Has Found Hundreds Of Potential New Planets',
            text: `loremNASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            imageSrc: 'https://homecollection.com.ru/upload/resize_cache/iblock/a82/800_400_1/2-min.jpg',
            date: '21'
        }
    ],
    current: null
}



const blogSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {
        setBlogs: (state, action: PayloadAction<IBlogType[]>) => {
            state.items = action.payload;
        },
        setCurrent: (state, action: PayloadAction<number>) => {
            state.current = state.items.filter(item => item.id === action.payload)[0]
        },
        createBlogItem: (state, action) => {
            state.items.push({
                id: state.items.length+1,
                ...action.payload
            })
        },
        removeBlogItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        updateBlogItem: (state, action) => {
            state.items = state.items.map(item => {
                if (item.id !== action.payload.id) return item
                
                return {
                    ...item, 
                    ...action.payload
                }
            })
        },
    }
})

const { actions, reducer } = blogSlice;

export const { setBlogs, setCurrent, createBlogItem, removeBlogItem, updateBlogItem } = actions;


export default reducer;