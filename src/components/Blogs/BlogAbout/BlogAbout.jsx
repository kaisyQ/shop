import React from "react"

import styled from "styled-components"

import TextWithEdit from "./TextWithEdit/TextWithEdit"
import NoImage from "../../Custom/NoImage"
import Button from "../../Custom/Button"
import EditButton from "../../Custom/EditButton"


import { useParams, NavLink } from "react-router-dom"

import reducer, { 
    
    initialState, 

    SET_TEXT, SET_TITLE, SET_IMAGE_SRC, SET_IMAGE_FILE, SET_IMAGE_EDIT, SET_TEXT_EDIT, SET_TITLE_EDIT 

} from "./BlogAboutReducer"



const Wrapper = styled.section`
    color: #000;
    padding: 2rem 4rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    row-gap: 4rem;

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

const BtnsWrapper = styled.div`
    display: flex;
    column-gap: 2rem;
`

export default ({ current, setCurrentBlogItem, createBlogItem, updateBlogItem, removeBlogItem }) => {

    const { id } = useParams()
    
    const [state, dispatch] = React.useReducer(reducer, initialState)

    React.useEffect(() => {
        // get blog data from server
        setCurrentBlogItem(parseInt(id))

        if (!current) {
            
            dispatch({ type: SET_TITLE_EDIT, payload: true })
            
            dispatch({ type: SET_TEXT_EDIT, payload: true })
            
            return
        }

        dispatch({ type: SET_TITLE, payload: current.title })
        
        dispatch({ type: SET_TEXT, payload: current.text })
        
        dispatch({ type: SET_IMAGE_SRC, payload: current.imageSrc })
        
        dispatch({ type: SET_TITLE_EDIT, payload: false })
            
        dispatch({ type: SET_TEXT_EDIT, payload: false })

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


    const saveChanges = (ev) => {
        updateBlogItem({
            ...state,
            id: parseInt(id)
        })
    }

    const deletePost = (ev) => {
        removeBlogItem(parseInt(id))
    }

    return (
        <>
            <Wrapper>
                <TextWithEdit 
                    text={state.title} 
                    type={'title'} 
                    dispatch={dispatch} 
                    action={SET_TITLE}
                    isEditMode={state.titleEdit}
                    editAction={SET_TITLE_EDIT}
                />
                        
                <TextWithEdit 
                    text={state.text} 
                    type={'text'} 
                    dispatch={dispatch} 
                    action={SET_TEXT}
                    isEditMode={state.textEdit}
                    editAction={SET_TEXT_EDIT}         
                />
                
                <input 
                    onChange={uploadImage} 
                    style={{display: 'none'}} 
                    type="file" 
                    id="upload-blog-image-input"
                />

                {
                    state.imageSrc ? <>

                        <div style={{position:'relative'}}>
                
                            <label htmlFor="upload-blog-image-input">
                                <EditButton />
                            </label>
                
                            <Image src={state.imageSrc} /> 
                        </div>
                    </> : <>
                        
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
                                onClick={createPost}
                            >
                                Create Post
                            </Button>
                        </div>
                    </> : <></>
                }
                {
                    <BtnsWrapper>
                        <Button onClick={saveChanges}>Save Changes</Button>
                        <NavLink to={'/blogs'}>
                            <Button onClick={deletePost}>Delete Post</Button>
                        </NavLink>
                    </BtnsWrapper>
                }
            </Wrapper>
        </>
    )
   
}