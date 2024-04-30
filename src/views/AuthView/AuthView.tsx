import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import styled from 'styled-components';


const AuthViewWrapper = styled.div`
    margin: 60px 0;
`;

const AlreadyHaveBlock = styled.header`
    margin-bottom: 30px;
`;


const AuthView = () => {

    const [isLogin, setIsLogin] = React.useState(false);

    const onSubmitL = () => {
        alert('submit login data')
    }

    const onSubmitR = () => {
        alert('submit reg data')
    }

    return (
        <AuthViewWrapper>
            <AlreadyHaveBlock>
                
                <button onClick={() => setIsLogin(true)}>Log in</button> | <button onClick={() => setIsLogin(false)}>Register</button>

            </AlreadyHaveBlock>
            {
                isLogin ? <LoginForm onSubmit={onSubmitL} /> 
                
                : <RegisterForm onSubmit={onSubmitR} />
            }
        </AuthViewWrapper>
    );
}

export default AuthView;