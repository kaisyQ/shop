import React from "react";

import Button from "components/Custom/Button/Button";
import Input from "components/Custom/Input/Input";
import Title from "components/Custom/Title/Title";

import { EditForm, UserEditWrapper, EditFormControl, InputWrapper } from "./UserEditStyles";

import { IUserEditConnectedProps } from "./UserEditContainer";

import { useParams } from "react-router-dom";

import { Roles } from "types/types";

import { NavLink } from "react-router-dom";

interface IUserEditProps extends IUserEditConnectedProps {

}

const UserEdit: React.FC<IUserEditProps> = ({ user, updateUser, addUser }) => {
   
    const { id } = useParams();
    
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {

    }, [id])

    React.useEffect(() => {
        if (!user) {
            return;
        }
        setLogin(user.login)
    }, [user])


    const onEditFormSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        if (!id) {
            addUser({
                id: 100,
                login,
                role: Roles.EMPLOYEE 
            }) 
        } else {
            updateUser({
                id: parseInt(id),
                login,
                role: Roles.EMPLOYEE
            })
        }

    }

    const onLoginChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLogin(ev.target.value);
    }
    
    const onPasswordChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(ev.target.value);
    }

    return (
        <>
            <UserEditWrapper>
                    <Title>Edit user</Title>
                <EditForm onSubmit={onEditFormSubmit}>
                    <InputWrapper>
                        <Input 
                            placeholder="Login" 
                            id="user-edit-login" 
                            type="input" 
                            onChange={onLoginChange}
                            value={login}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Input 
                            placeholder="New user password" 
                            id="user-edit-password" 
                            type="input" 
                            onChange={onPasswordChange}
                            value={password}
                        />
                    </InputWrapper>

                    <EditFormControl>
                        <NavLink to="/admin">
                            <Button>Save</Button>
                        </NavLink>
                    </EditFormControl> 
                </EditForm>
            </UserEditWrapper>
        </>
    );
}


export default UserEdit;