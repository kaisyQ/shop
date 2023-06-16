import React from "react";

import TableSelector from "./TableSelector/TableSelector";

import Button from "components/Custom/Button/Button";

import { AdminConnectedProps } from "./AdminContainer";

import { Outlet, NavLink } from "react-router-dom";

import { AdminWrapper, AdminHeader, AdminNav, LinksWrapper, UserInfo } from "./AdminStyles";

import { ADMIN } from "types/types";

import * as Icon from "react-bootstrap-icons";

const Admin: React.FC<AdminConnectedProps> = ({ id, login, role }) => {

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
                        </LinksWrapper>
                    </AdminNav>
                    <UserInfo>
                        <span>{ login }</span>
                        <Icon.BoxArrowRight size={"2rem"} cursor={"pointer"} />
                    </UserInfo>
                </AdminHeader>
                <TableSelector role={role}/>
                <Outlet />
            </AdminWrapper>
        </>
    );
}

export default Admin;