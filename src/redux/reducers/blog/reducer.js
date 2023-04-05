import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: [
        {
            id: 1,
            title: 'NASA Has Found Hundreds Of Potential New Planets',
            shortDescription: `NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            fullDescription: `loremNASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            imageSrc: 'https://www.mebelbspb.ru/images/tovar/cover3671.jpg'
        },
        {
            id: 2,
            title: 'NASA Has Found Hundreds Of Potential New Planets',
            shortDescription: `NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            fullDescription: `loremNASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            imageSrc: 'https://bestmebelik.ru/UserFiles/Image/Pasha-stati/raskl_meh_var3.jpg'
        },
        {
            id: 3,
            title: 'NASA Has Found Hundreds Of Potential New Planets',
            shortDescription: `NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            fullDescription: `loremNASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            imageSrc: 'https://www.anderssen.ru/upload/iblock/d1c/d1c3fff1edab2eb988a7841d60814d0d.jpg'
        },
        {
            id: 4,
            title: 'NASA Has Found Hundreds Of Potential New Planets',
            shortDescription: `NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            fullDescription: `loremNASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            imageSrc: 'https://mebel.ru/upload/iblock/1f2/g6vd0clhvjdwg39o66adv82km3ihxhl5.jpg'
        },
        {
            id: 5,
            title: 'NASA Has Found Hundreds Of Potential New Planets',
            shortDescription: `NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            fullDescription: `loremNASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            imageSrc: 'https://f-storespb.ru/upload/resize_cache/iblock/063/662_475_1/a4dorynum0sb1rjzxj838mer5qd7696i.jpg'
        },
        {
            id: 6,
            title: 'NASA Has Found Hundreds Of Potential New Planets',
            shortDescription: `NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            fullDescription: `loremNASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
                “planet candidates” discovered by the Kepler space telescope, 
                10 of which are similar to Earth’s size and may be habitable by other life forms.`,
            imageSrc: 'https://homecollection.com.ru/upload/resize_cache/iblock/a82/800_400_1/2-min.jpg'
        }
    ],
    current: {
        id: 6,
        title: 'NASA Has Found Hundreds Of Potential New Planets' ,
        text: `loremNASA released a list of 219 new 
            “planet candidates” discovered by the Kepler space telescope, 
            10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
            “planet candidates” discovered by the Kepler space telescope, 
            10 of which are similar to Earth’s size and may be habitable by other life forms.NASA released a list of 219 new 
            “planet candidates” discovered by the Kepler space telescope, 
            10 of which are similar to Earth’s size and may be habitable by other life forms.`
        ,
        imageSrc: 'https://mebel.ru/upload/iblock/1f2/g6vd0clhvjdwg39o66adv82km3ihxhl5.jpg'
            
    }
}

const blogSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {
        setBlogs: () => {

        },
        setCurrent: (state, action) => {
            state.current = action.payload
        }
    }
})

const { actions, reducer } = blogSlice

export const { setBlogs, setCurrent } = actions 


export default reducer