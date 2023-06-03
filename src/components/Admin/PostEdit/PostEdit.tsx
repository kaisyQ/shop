import React from "react";

import Button from "components/Custom/Button/Button";
import Input from "components/Custom/Input/Input";
import Title from "components/Custom/Title/Title";

import { 
    EditForm, UserEditWrapper, EditFormControl, InputWrapper, LabelWrapper, LabelSpan
} from "./PostEditStyles";

import { IPostEditConnectedProps } from "./PostEditContainer";
import { useParams, NavLink } from "react-router-dom";

interface IPostEditProps extends IPostEditConnectedProps {

}


const PostEdit: React.FC<IPostEditProps> = ({ post, createPost, updatePost }) => {
    
    const { id } = useParams();


    const [title, setTitle] = React.useState('');
    const [text, setText] = React.useState('');
    const [postImage, setPostImage] = React.useState<string | null>(null);


    React.useEffect(() => {

    }, [id])


    React.useEffect(() => {
        if (!post) {
            return;
        }
        setTitle(post.title);
        setText(post.text);
        setPostImage(post.imageSrc);
    }, [post])


    const onSaveClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if(!postImage) {
            return;
        }

        if (!id) {
            createPost({
                title, text, imageSrc: postImage
            })
        } else {
            updatePost({
                id: parseInt(id), 
                title, 
                text, 
                imageSrc: postImage
            })
        }
    }

    const onTitleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTitle(ev.target.value);
    }
    
    const onTextChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setText(ev.target.value);
    }

    const onImageChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (!ev.target.files) {
            return;
        }
        const url = URL.createObjectURL(ev.target.files[0]);
        setPostImage(url);
    }

    return (
        <>
            <UserEditWrapper>
                <Title>Post Edit</Title>
                <EditForm>
                    <InputWrapper>
                        <Input 
                            placeholder="Title" 
                            id="post-edit-title" 
                            type="input" 
                            onChange={onTitleChange}
                            value={title}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Input 
                            placeholder="Text" 
                            id="post-edit-text" 
                            type="textarea" 
                            onChange={onTextChange}
                            value={text}
                            minHeight="30rem"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <LabelWrapper>
                            <div>
                            <LabelSpan>Choose a post image</LabelSpan>
                            </div>
                            <input
                                id="post-edit-image"
                                type="file" 
                                accept="image.png, image/jpeg "
                                style={{display: 'none'}}
                                onChange={onImageChange}
                            />
                        </LabelWrapper>
                        <div>
                        {
                            postImage ? <img src={postImage} alt="post image" /> : null
                        }
                        </div>
                    </InputWrapper>

                    <EditFormControl>
                        <NavLink to={"/admin"}>
                            <Button onClick={onSaveClick}>Save</Button>
                        </NavLink>
                    </EditFormControl>
                </EditForm>
            </UserEditWrapper>
        </>
    );
}


export default PostEdit;