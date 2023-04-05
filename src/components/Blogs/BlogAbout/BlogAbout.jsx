import React from "react"

import styled from "styled-components"

import TextWithEdit from "./TextWithEdit/TextWithEdit"
import NoImage from "../../Custom/NoImage"
import Button from "../../Custom/Button"

import { useParams } from "react-router-dom"




const Wrapper = styled.section`
    color: #000;
    padding: 2rem 4rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    text-align: left;
`

const Image = styled.img`
    display: block;
    width: 100%;
    object-fit: cover;

`

export default ({ current, setCurrentBlogItem }) => {

    const { id } = useParams()

    const [isEditMode, setIsEditMode] = React.useState(false)
    
    const [blogItem, setBlogItem] = React.useState(null)

    React.useEffect(() => {
        // get blog data from server
        if (!id) {
            setIsEditMode(true)
            setBlogItem({
                title: '',
                text: '',
                imageSrc: ''
            })
            return
        }
        setBlogItem({...current})

    },[id, setIsEditMode, setCurrentBlogItem])

    const noImageClick = (ev) => {
        console.log('click')
    }

    return (
        <>
            <Wrapper>
                {
                    blogItem ? <>
                        <TextWithEdit text={blogItem.title} type={'title'} isEditMode={isEditMode} setBlogItem={setBlogItem}/>
                        <TextWithEdit text={blogItem.text} type={'text'} isEditMode={isEditMode} setBlogItem={setBlogItem}/>
                        {
                            blogItem.imageSrc ? <>
                                <Image src={blogItem.imageSrc} /> 
                            </> : <>
                                <NoImage noImageClick={noImageClick}/>
                            </>
                        }
                        <TextWithEdit text={'01.02.2023'} type={'date'} isEditMode={isEditMode} setBlogItem={setBlogItem}/>
                        {
                            isEditMode ? <>
                                <div>
                                    <Button>Create Post</Button>
                                </div>
                            </> : <></>
                        }
                    </> : <></>
                }
            </Wrapper>
        </>
    )
   
}