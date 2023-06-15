import React from "react";

import { Navigate } from "react-router-dom";


const withAuthRedirect = (Component: React.FC<any> | React.ComponentClass) => {
    
    const RedirectComponent = (props: any) => {
        if (!props.isAuth) return <Navigate to='/auth' />;
        
        return <Component {...props} />;
    }
    return RedirectComponent;
}

export default withAuthRedirect;