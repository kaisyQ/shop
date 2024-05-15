import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import styled from 'styled-components';
import { Tabs, Tab, Link } from '@nextui-org/react';
import BackToHomeButton from 'shared/BackToHomeButton/BackToHomeButton';
import { toast } from 'sonner';
import WithRedirect from 'shared/Hoc/WithRedirect';

const AuthViewWrapper = styled.div`
    margin: 60px 0;
`;

const AuthView: React.FC = () => {

    const [selected, setSelected] = React.useState<string>("login");


    const onSubmitL = () => {
        alert('submit login data')
    }

    const onSubmitR = () => {

        toast.error('submit reg data', {
            position: 'top-right',
            duration: 5000
        })
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
                        <RegisterForm />
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

export default WithRedirect(AuthView);