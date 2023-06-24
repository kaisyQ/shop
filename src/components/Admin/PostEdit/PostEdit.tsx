import React from "react";

import Button from "components/Custom/Button/Button";
import Input from "components/Custom/Input/Input";
import Title from "components/Custom/Title/Title";

import { 
    EditForm, UserEditWrapper, EditFormControl, InputWrapper, LabelWrapper, LabelSpan
} from "./PostEditStyles";

import { useNavigate } from "react-router-dom";

import reducer, 
{ 
    initialState, setFullState, setTitle, setText, 
    selectTitle, selectText, selectImageSrc, selectImageFile, setImageSrc, setFullImage
} from "reducers/post-edit/reducer";

import { IPostEditApiConnectedProps } from "./PostEditContainer";

interface IPostEditProps extends IPostEditApiConnectedProps{
}


const PostEdit: React.FC<IPostEditProps> = (props) => {
    
    const { post, fetchToCreatePost, fetchToUpdatePost, setConfirmModalData } = props;

    const navigate = useNavigate();

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        if (!post) {
            return;
        }
        dispatch(setFullState({
            title: post.title,
            text: post.text,
            imageSrc: post.imageSrc
        }));
    }, [post])


    const text = selectText(state);
    const title = selectTitle(state);
    const imageSrc = selectImageSrc(state);
    const imageFile = selectImageFile(state);

    const saveOrCreate = () => {
        if(!imageSrc) {
            return;
        }

        if (!post) {
            if (!imageFile || !title || !text) {
               return;
            }
            const formData = new FormData();
            formData.append("postImage", imageFile);
            formData.append("data", JSON.stringify({
                title: title,
                text: text
            }));

            setConfirmModalData({
                callback: () => {
                    fetchToCreatePost(formData);
                    navigate("/admin/postsTable")
                },
                isVisible: true,
                message: "Confirm creating post..."
            })
        } else {
            if (!imageFile && !title && !text) {
                return;
            }
            const formData = new FormData();
            const data = {
                id: post.id
            };
            if (imageFile) {
                formData.append("postImage", imageFile);
            }
            if(text) {
                Object.assign(data, { text });
            }
            if(title) {
                Object.assign(data, { title });
            }
            formData.append("data", JSON.stringify(data));

            setConfirmModalData({
                callback: () => {
                    fetchToUpdatePost(formData);
                    navigate("/admin/postTable");
                },
                isVisible: true,
                message: "Confirm updating post..."
            })
        }
    }

    

    const onTitleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(setTitle(ev.target.value));
    }
    
    const onTextChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(setText(ev.target.value));
    }

    const onImageChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (!ev.target.files) {
            return;
        }

        const url = URL.createObjectURL(ev.target.files[0]);
        dispatch(setFullImage({
            imageSrc: url, 
            imageFile: ev.target.files[0]
        }));
    }

    return (
        <>
            <UserEditWrapper>
                <Title>Post Edit</Title>
                <EditForm onSubmit={(ev) => ev.preventDefault()}>
                    <InputWrapper>
                        <Input placeholder="Title" id="post-edit-title"  type="input" 
                            onChange={onTitleChange} value={title}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Input placeholder="Text" id="post-edit-text" type="textarea" 
                            onChange={onTextChange} value={text} minHeight="30rem"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <LabelWrapper>
                            <LabelSpan>Choose a post image</LabelSpan>
                            <input id="post-edit-image" type="file" style={{display: 'none'}}
                                accept="image/png, image/jpeg, image/jpg" onChange={onImageChange}
                            />
                        </LabelWrapper>
                        <div>
                        {
                            imageSrc ? <img src={imageSrc} alt="post image" /> : null
                        }
                        </div>
                    </InputWrapper>

                    <EditFormControl>
                        <Button onClick={saveOrCreate} isReverse={true}>Save</Button>
                    </EditFormControl>
                </EditForm>
            </UserEditWrapper>
        </>
    );
}


export default PostEdit;