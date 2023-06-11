import React from "react";

import TableSelector from "./TableSelector/TableSelector";
import Button from "components/Custom/Button/Button";

import { AdminConnectedProps } from "./AdminContainer";

import { Navigate, Outlet, NavLink } from "react-router-dom";

import { AdminWrapper, AdminHeader, AdminNav, LinksWrapper } from "./AdminStyles";

const Admin: React.FC<AdminConnectedProps> = ({ isAuth, id, login }) => {
    
    if (!isAuth) {
        return <Navigate  to={"/auth"} />;
    }
    
    return (
        <>
            <AdminWrapper>
                <AdminHeader>
                    <AdminNav>
                        <h2>Create</h2>
                        <LinksWrapper>
                            <NavLink to={"/admin/user"}>
                                <Button isReverse={true}>user</Button>
                            </NavLink>
                            <NavLink to={"/admin/product"}>
                                <Button isReverse={true}>product</Button>
                            </NavLink>
                            <NavLink to={"/admin/post"}>
                                <Button isReverse={true}>post</Button>
                            </NavLink>
                        </LinksWrapper>
                    </AdminNav>
                    <TableSelector />
                </AdminHeader>
                <Outlet />
            </AdminWrapper>
        </>
    );
}

export default Admin;