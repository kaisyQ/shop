import React from "react";

import Button from "components/Custom/Button/Button";
import Input from "components/Custom/Input/Input";

import { EditForm, UserEditWrapper, EditFormControl, InputWrapper } from "./PostEditStyles";

import { IPostEditConnectedProps } from "./PostEditContainer";
import { useParams } from "react-router-dom";

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


    const onEditFormSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

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
                <EditForm onSubmit={onEditFormSubmit}>
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
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label>
                            <span>Choose a post image</span>
                            <input
                                id="post-edit-image"
                                type="file" 
                                accept="image.png, image/jpeg "
                                style={{display: 'none'}}
                                onChange={onImageChange}
                            />
                        </label>
                        {
                            postImage ? <img src={postImage} alt="" /> : null
                        }
                    </InputWrapper>

                    <EditFormControl>
                        <Button>Save</Button>
                    </EditFormControl>
                </EditForm>
            </UserEditWrapper>
        </>
    );
}


export default PostEdit;