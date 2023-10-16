import React from "react";

import TableSelector from "./TableSelector/TableSelector";

import Button from "components/Custom/Button/Button";

import { AdminConnectedProps } from "./AdminContainer";

import { Outlet, NavLink } from "react-router-dom";

import { AdminWrapper, AdminHeader, AdminNav, LinksWrapper, UserInfo } from "./AdminStyles";

import { ADMIN } from "constants/constants";

import * as Icon from "react-bootstrap-icons";

const Admin: React.FC<AdminConnectedProps> = ({ login, role, fetchToLogout, setConfirmModalData }) => {

    const logoutClick = (ev: React.MouseEvent<SVGElement>) => {
        setConfirmModalData({
            callback: () => fetchToLogout(),
            isVisible: true,
            message: "Are you sure you want to exit ?"
        });
    }

    return (
        <>
            <AdminWrapper>
                <AdminHeader>
                    <AdminNav>
                        <LinksWrapper>
                        
                            {
                                role === ADMIN ? <>
                                    <NavLink to={"/admin/user"}>
                                        <Button isReverse={true}>create user</Button>
                                    </NavLink> 
                                </> : null
                            }   
                        
                            <NavLink to={"/admin/product"}>
                                <Button isReverse={true}>create product</Button>
                            </NavLink>
                        
                            <NavLink to={"/admin/post"}>
                                <Button isReverse={true}>create post</Button>
                            </NavLink>
                        
                            <NavLink to={"/admin/category"}>
                                <Button isReverse={true}>create category</Button>
                            </NavLink>
                        
                        </LinksWrapper>
                    </AdminNav>
                    <UserInfo>
                        <span>{ login }</span>
                        <Icon.BoxArrowRight size={"2rem"} cursor={"pointer"} onClick={logoutClick} />
                    </UserInfo>
                </AdminHeader>
                <TableSelector role={role} />
                <Outlet />
            </AdminWrapper>
        </>
    );
}

export default Admin;