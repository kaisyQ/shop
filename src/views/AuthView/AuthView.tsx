import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import styled from 'styled-components';
import { Tabs, Tab, Link } from '@nextui-org/react';
import BackToHomeButton from 'shared/BackToHomeButton/BackToHomeButton';

const AuthViewWrapper = styled.div`
    margin: 60px 0;
`;



const AuthView = () => {

    const [selected, setSelected] = React.useState("login");

    const onSubmitL = () => {
        alert('submit login data')
    }

    const onSubmitR = () => {
        alert('submit reg data')
    }

    return (
        <AuthViewWrapper>
            <BackToHomeButton />
            <div>
                <Tabs
                    size="lg"
                    aria-label="Tabs form"
                    selectedKey={selected}
                    onSelectionChange={(key) => setSelected(key.toString())}
                    className='dark'
                >
                    <Tab key="login" title="Login">
                        <LoginForm onSubmit={onSubmitL} /> 
                    </Tab>
                    <Tab key="sign-up" title="Sign up">
                        <RegisterForm onSubmit={onSubmitR} />
                    </Tab>
                </Tabs>
                <p className="text-center">
                  Already have an account?{" "}
                  <Link size="md" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p> 
            </div>
        </AuthViewWrapper>
    );
}

export default AuthView;