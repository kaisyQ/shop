import React from "react";

import { AdminConnectedProps } from "./AdminContainer";

import { Navigate } from "react-router-dom";
import UsersTableContainer from "./UsersTable/UsersTableContainer";


const Admin: React.FC<AdminConnectedProps> = ({ isAuth, id, login }) => {
    
    if (!isAuth) {
        return <Navigate  to={"/auth"} />
    }
    
    return (
        <UsersTableContainer />
    );
}

export default Admin;