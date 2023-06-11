import React from "react";

import Button from "components/Custom/Button/Button";
import Input from "components/Custom/Input/Input";
import Title from "components/Custom/Title/Title";

import { 
    EditForm, UserEditWrapper, EditFormControl, 
    InputWrapper, InfoContainer, InfoItem
} from "./UserEditStyles";

import { IUserEditConnectedProps } from "./UserEditContainer";

import { useParams } from "react-router-dom";

import { IShortUser } from "types/types";

import { NavLink } from "react-router-dom";

interface IUserEditProps extends IUserEditConnectedProps {

}

const UserEdit: React.FC<IUserEditProps> = (props) => {
   
    const { 
        fetchToCreateUser, user, fetchToUpdateUser,
        fetchUserById, setCurrentUser 
    } = props;

    const { id } = useParams();
    
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {
        if (!id) {
            setCurrentUser(null);
            return;
        }
        fetchUserById(id);
    }, [id, fetchUserById]);

    React.useEffect(() => {
        if (!user) {
            return;
        }
        setLogin(user.login);
    }, [user]);

    
    const onSumbit = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (!id) {
            fetchToCreateUser({ login: login, password: password } as IShortUser);
        } else {
            fetchToUpdateUser({
                id: id,
                user: {
                    login: login, password: password
                } as IShortUser
            });
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
                <Title>Editing user</Title>
                {
                    user ? <>
                        <InfoContainer>
                            <InfoItem>id: <span>{user.id}</span></InfoItem>
                            <InfoItem>Role: <span>{user.role}</span></InfoItem>
                        </InfoContainer>
                    </> : null
                }
                <EditForm>
                    <InputWrapper>
                        <Input 
                            placeholder="Enter new login" 
                            id="user-edit-login" 
                            type="input" 
                            onChange={onLoginChange}
                            value={login}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Input 
                            placeholder="Enter new password" 
                            id="user-edit-password" 
                            type="input" 
                            onChange={onPasswordChange}
                            value={password}
                        />
                    </InputWrapper>

                    <EditFormControl>
                        <NavLink to="/admin">
                            <Button onClick={onSumbit} isReverse={true}>Save</Button>
                        </NavLink>
                    </EditFormControl> 
                </EditForm>
            </UserEditWrapper>
        </>
    );
}


export default UserEdit;