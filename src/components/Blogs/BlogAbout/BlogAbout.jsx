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

export default ({ current, setCurrentBlogItem, createBlogItem }) => {

    const { id } = useParams()

    const [isEditMode, setIsEditMode] = React.useState(false)
    
    const [blogItem, setBlogItem] = React.useState(null)

    const [uploadFile, setUploadFile] = React.useState(null)

    const [src, setSrc] = React.useState(null)


    React.useEffect(() => {
        // get blog data from server
        setCurrentBlogItem(parseInt(id))
        
        if (!id) {
            setIsEditMode(true)
            setBlogItem({
                title: '',
                text: '',
                date: '',
            })
            return
        }
        setBlogItem({...current})

    },[id, current, setIsEditMode, setCurrentBlogItem])

    const uploadImage = (ev) => {
        
        const reader = new FileReader()

        reader.onload = (ev) => {
            setSrc(ev.target.result)
        }
        
        reader.readAsDataURL(ev.target.files[0]);

        setUploadFile(ev.target.files[0])
    }

    const createPost = (ev) => {

        if (blogItem.title&&blogItem.text&&blogItem.date&&src) {
            createBlogItem({
                ...blogItem,
                imageSrc: src
            })
        }
    }

    return (
        <>
            <Wrapper>
                {
                    blogItem ? <>
                        <TextWithEdit text={blogItem.title} type={'title'} isEditMode={isEditMode} setBlogItem={setBlogItem}/>
                        <TextWithEdit text={blogItem.text} type={'text'} isEditMode={isEditMode} setBlogItem={setBlogItem}/>
                        {
                            blogItem.imageSrc || src ? <>
                                <Image src={blogItem.imageSrc || src} /> 
                            </> : <>
                                <input onChange={uploadImage} style={{display: 'none'}} type="file" id="upload-blog-image-input"/>
                                <label htmlFor="upload-blog-image-input">
                                    <NoImage />
                                </label>

                            </>
                        }
                        <TextWithEdit text={blogItem.date} type={'date'} isEditMode={isEditMode} setBlogItem={setBlogItem}/>
                        {
                            isEditMode ? <>
                                <div>
                                    <Button 
                                        disabled={!blogItem.title&&!blogItem.text&&!blogItem.date&&!src} 
                                        onClick={createPost}>
                                            Create Post
                                    </Button>
                                </div>
                            </> : <></>
                        }
                    </> : <></>
                }
            </Wrapper>
        </>
    )
   
}