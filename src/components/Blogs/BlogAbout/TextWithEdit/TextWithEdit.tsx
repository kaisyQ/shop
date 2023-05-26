import React from "react";

import Input from '../../../Custom/Input/Input';
import EditButton from "../../../Custom/EditButton/EditButton";

import * as Icon from 'react-bootstrap-icons';

import { Container, Title, Text, Btn } from "./TextWithEditStyles";

import { TitleType, TextType, TITLE_TYPE, TEXT_TYPE } from "./TextWithEditTypes";

import { BlogAboutAction } from "../../../../react-reducers/BlogAboutReducer";

import { 
    setTextEditAC, setTitleEditAC, setTextAC, setTitleAC 
} from "../../../../react-reducers/BlogAboutReducer";


interface ITextWithEditProps {
    inputId: string,
    text: string,
    type: TitleType | TextType,
    dispatch: React.Dispatch<BlogAboutAction>,
    isEditMode: boolean,
    editActionCreator: typeof setTextEditAC | typeof setTitleEditAC,
    textChangeActionCreator: typeof setTextAC | typeof setTitleAC
}


const TextWithEdit: React.FC<ITextWithEditProps> = (props) => {
    
    const { inputId, text, type, dispatch, isEditMode, editActionCreator, textChangeActionCreator } = props;


    const onTextChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
        dispatch(textChangeActionCreator(ev.target.value)); 
    }

    const onSaveBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => { 
        dispatch(editActionCreator(false));
    }

    const editModeOn = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(editActionCreator(true));
    }
    return (
        <>
            {
                !isEditMode ? <>
                    
                    { 
                        type === TITLE_TYPE ? <>
                            <Title>
                                <EditButton onClick={editModeOn} />
                                { text }
                            </Title> 
                        </> : null 
                    }
                    
                    { type === TEXT_TYPE ? <>
                            <div style={{position: 'relative'}}>
                                <EditButton onClick={editModeOn} />
                                <Text>
                                    { text }
                                </Text> 
                            </div>
                        </> : null 
                    }
                    
                </> : <>
                    <Container>
                        
                        <Input
                            id={inputId}
                            placeholder={type[0].toUpperCase()+type.slice(1)} 
                            value={text} 
                            onChange={onTextChange} 
                        />
                        
                        <Btn onClick={onSaveBtnClick}>
                            <Icon.Check2 fill="currentColor" size={'2.5rem'} />
                        </Btn>
                    
                    </Container>
                </>
            }
        </>
    );
}

export default TextWithEdit;