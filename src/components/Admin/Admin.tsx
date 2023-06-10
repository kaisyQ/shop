import React from "react";

import TableSelector from "./TableSelector/TableSelector";

import { AdminConnectedProps } from "./AdminContainer";

import { Navigate, Outlet } from "react-router-dom";

const Admin: React.FC<AdminConnectedProps> = ({ isAuth, id, login }) => {
    
    if (!isAuth) {
        return <Navigate  to={"/auth"} />
    }
    
    return (
        <>
            <div>
                <TableSelector />
                <Outlet />
            </div>
        </>
    );
}

export default Admin;