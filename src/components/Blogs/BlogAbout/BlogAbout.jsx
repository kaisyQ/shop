import React from "react"

import styled from "styled-components"

import Button from "../../Custom/Button"

import BlogAboutTitle from "./BlogAboutTitle/BlogAboutTitle"
import BlogAboutText from "./BlogAboutText/BlogAboutText"
import BlogAboutImage from "./BlogAboutImage/BlogAboutImage"

import { useParams } from "react-router-dom"


const Wrapper = styled.section`
    padding: 0 2rem;
`

const BtnsWrapper = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 1rem;
`

export default ({ current }) => {
    
    const { id } = useParams()

    const [isEditMode, setIsEditMode] = React.useState(false)
    
    const [arrOfBlogStruct, setArrOfBlogStruct] = React.useState([])
    
    
    React.useEffect(() => {
        // get blog data from server
        if (!id) {
            setIsEditMode(true)
        }

    },[id, setIsEditMode])



    const addTitle = (ev) => {
        setArrOfBlogStruct([...arrOfBlogStruct, { type: 'title', text: '' }])
    }

    const addText = (ev) => {
        setArrOfBlogStruct([...arrOfBlogStruct, { type: 'text', text: '' }])
    }

    const addImage = (ev) => {
        setArrOfBlogStruct([...arrOfBlogStruct, { type: 'image', imageSrc: '' }])
    }

    return (
        <>
            <Wrapper>
            <Button onClick={() => {console.log(arrOfBlogStruct)}}>Show</Button>
            {
                isEditMode? <>
                    {
                        arrOfBlogStruct.map((item, index) => {
                            if (item.type === 'title') return <BlogAboutTitle type={item.type} id={index} setArrOfBlogStruct={setArrOfBlogStruct} key={index} text={item.text}/>
                            if (item.type === 'text') return <BlogAboutTitle type={item.type} id={index} setArrOfBlogStruct={setArrOfBlogStruct} key={index} text={item.text}/>
                            if (item.type === 'image') return <BlogAboutImage type={item.type} id={index} setArrOfBlogStruct={setArrOfBlogStruct} key={index} src={item.imageSrc}/>
                        })
                    }
                    <BtnsWrapper>
                        <Button onClick={addTitle}>Add Title</Button>
                        <Button onClick={addText}>Add Text</Button>
                        <Button onClick={addImage}>Add Image</Button>
                    </BtnsWrapper>
                </> : current.struct.map((item, index) => {
                        if (item.type === 'title') return <BlogAboutTitle key={index} text={item.text}/>
                        if (item.type === 'text') return <BlogAboutText key={index} text={item.text}/>
                        if (item.type === 'image') return <BlogAboutImage key={index} src={item.imageSrc}/>
                    })
            }
            </Wrapper>
        </>
    )
   
}