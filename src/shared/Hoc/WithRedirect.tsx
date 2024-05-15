// WithRedirect.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from 'store/reducers/auth/AuthSelector';
import { useAppSelector } from 'store/store';

type ComponentType = React.FC<any> | React.ComponentClass<any>;

const WithRedirect = (Component: ComponentType) => {

    const WrappedComponent = (props: any) => {
        const isLoggedIn = useAppSelector(state => getIsLoggedIn(state));
        const navigate = useNavigate();
        if (isLoggedIn) {
            navigate('/home');
        }
        return <Component {...props} />;
    };

    return WrappedComponent;
};

export default WithRedirect;