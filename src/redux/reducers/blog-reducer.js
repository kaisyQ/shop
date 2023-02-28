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
            imageSrc: 'https://mebel.ru/upload/iblock/1f2/g6vd0clhvjdwg39o66adv82km3ihxhl5.jpg'
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
            imageSrc: 'https://mebel.ru/upload/iblock/1f2/g6vd0clhvjdwg39o66adv82km3ihxhl5.jpg'
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
            imageSrc: 'https://mebel.ru/upload/iblock/1f2/g6vd0clhvjdwg39o66adv82km3ihxhl5.jpg'
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
            imageSrc: 'https://mebel.ru/upload/iblock/1f2/g6vd0clhvjdwg39o66adv82km3ihxhl5.jpg'
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
            imageSrc: 'https://mebel.ru/upload/iblock/1f2/g6vd0clhvjdwg39o66adv82km3ihxhl5.jpg'
        }
    ]
}

const blogSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {
        setBlogs: () => {

        }
    }
})

const { actions, reducer } = blogSlice


export default reducer