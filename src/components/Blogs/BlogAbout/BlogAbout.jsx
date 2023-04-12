import React from "react"

import styled from "styled-components"

import TextWithEdit from "./TextWithEdit/TextWithEdit"
import NoImage from "../../Custom/NoImage"
import Button from "../../Custom/Button"

import { useParams } from "react-router-dom"

import reducer, { 
    
    initialState, 

    SET_TEXT, SET_TITLE, SET_IMAGE_SRC, SET_IMAGE_FILE 

} from "./BlogAboutReducer"



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

const Date = styled.p`
    text-align: right;
    font-size: 1.6rem;
    text-decoration: underline;
`

export default ({ current, setCurrentBlogItem, createBlogItem }) => {

    const { id } = useParams()

    const [state, dispatch] = React.useReducer(reducer, initialState)

    React.useEffect(() => {
        // get blog data from server
        setCurrentBlogItem(parseInt(id))

        if (!current) return

        dispatch({ type: SET_TITLE, payload: current.title })
        
        dispatch({ type: SET_TEXT, payload: current.text })
        
        dispatch({ type: SET_IMAGE_SRC, payload: current.imageSrc })


    },[id, current, setCurrentBlogItem, dispatch])

    const uploadImage = (ev) => {
        
        const reader = new FileReader()

        reader.onload = (ev) => {
            dispatch({ type: SET_IMAGE_SRC, payload: ev.target.result })
        }
        
        reader.readAsDataURL(ev.target.files[0])

        dispatch({ type: SET_IMAGE_FILE, payload: ev.target.files[0] })
    }

    const createPost = (ev) => {

        if (state.title&&state.text&&state.imageSrc) {
            createBlogItem({ ...state })
        }
    }

    return (
        <>
            <Wrapper>
                <TextWithEdit 
                    text={state.title} 
                    type={'title'} 
                    dispatch={dispatch} 
                    action={SET_TITLE}
                    isEditMode={!id}
                />
                        
                <TextWithEdit 
                    text={state.text} 
                    type={'text'} 
                    dispatch={dispatch} 
                    action={SET_TEXT}
                    isEditMode={!id}                      
                />

                {
                    state.imageSrc ? <>
                        <Image src={state.imageSrc} /> 
                    </> : <>
                        
                        <input 
                            onChange={uploadImage} 
                            style={{display: 'none'}} 
                            type="file" 
                            id="upload-blog-image-input"
                        />
                        
                        <label htmlFor="upload-blog-image-input">
                            <NoImage />
                        </label>

                    </>
                }
                        
                { current ? <Date>{ current.date }</Date> : null }
                {
                    !id ? <>
                        <div>
                            <Button 
                                disabled={!state.title&&!state.text&&!state.imageSrc} 
                                onClick={createPost}>
                                    Create Post
                            </Button>
                        </div>
                    </> : <></>
                }
            </Wrapper>
        </>
    )
   
}