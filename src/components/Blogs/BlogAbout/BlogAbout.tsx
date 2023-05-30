import React from "react"

import TextWithEdit from "./TextWithEdit/TextWithEdit";
import NoImage from "../../Custom/NoImage/NoImage";
import Button from "components/Custom/Button/Button";
import EditButton from "../../Custom/EditButton/EditButton";

import { useParams, NavLink } from "react-router-dom";

import reducer, { 
    initialState, setImageFileAC, setImageSrcAC, setTextAC, setTextEditAC, setTitleAC, setTitleEditAC
} from "./../../../react-reducers/BlogAboutReducer";

import { 
    Wrapper, Image, Date, BtnsWrapper
} from "./BlogAboutStyles";

import { TITLE_TYPE, TEXT_TYPE } from "./TextWithEdit/TextWithEditTypes";

import { BlogAboutConnectedProps } from "./BlogAboutContainer";



const BlogAbout: React.FC<BlogAboutConnectedProps> = (props) => {

    const { current, setCurrentBlogItem, createBlogItem, updateBlogItem, removeBlogItem } = props;

    const { id } = useParams();
    
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        // get blog data from server

        if (id) {
            setCurrentBlogItem(parseInt(id));
        }

        if (!current) {
            dispatch(setTitleEditAC(true));
            dispatch(setTextEditAC(true));
            return;
        }

        dispatch(setTitleAC(current.title));
        dispatch(setTextAC(current.text));
        dispatch(setImageSrcAC(current.imageSrc));
        dispatch(setTitleEditAC(false));
        dispatch(setTextEditAC(false));

    },[id, current, setCurrentBlogItem, dispatch])

    const uploadImage = (ev: React.ChangeEvent<HTMLInputElement>) => {

        const reader = new FileReader();

        reader.onload = (ev) => {
            if (!ev.target) {
                return;
            }
            dispatch(setImageSrcAC(ev.target.result as string));
        }
        
        if (!ev.target.files) {
            return;
        }
        
        reader.readAsDataURL(ev.target.files[0]);

        dispatch(setImageFileAC(ev.target.files[0]));
    }


    
    const createPost = (ev: React.MouseEvent<HTMLButtonElement>) => {

        if (state.title&&state.text&&state.imageSrc) {
            createBlogItem({ ...state })
        }
    }

    const saveChanges = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (!id) return;
        updateBlogItem({
            ...state,
            id: parseInt(id)
        })
    }

    const deletePost = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (!id) return;
        removeBlogItem(parseInt(id))
    }

    return (
        <>
            <Wrapper>
                <TextWithEdit
                    inputId={"blog-title-input"}
                    text={state.title} 
                    type={TITLE_TYPE} 
                    dispatch={dispatch} 
                    isEditMode={state.titleEdit}
                    editActionCreator={setTitleEditAC}
                    textChangeActionCreator={setTitleAC}
                />
                        
                <TextWithEdit
                    inputId={"blog-text-input"}
                    text={state.text} 
                    type={TEXT_TYPE} 
                    dispatch={dispatch} 
                    isEditMode={state.textEdit}
                    editActionCreator={setTextEditAC}
                    textChangeActionCreator={setTextAC}        
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
                                <EditButton onClick={(ev) => ev.preventDefault()}/>
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
    );
}

   
export default BlogAbout;