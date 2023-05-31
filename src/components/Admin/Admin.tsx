import React from "react";

import Title from "components/Custom/Title/Title";
import UsersTableContainer from "./UsersTable/UsersTableContainer";
import ProductsTableContainer from "./ProductsTable/ProductsTableContainer";

import { 
    AdminWrapper
} from "./AdminStyles";

import { AdminConnectedProps } from "./AdminContainer";

import { Navigate } from "react-router-dom";
import BlogsTableContainer from "./BlogsTable/BlogsTableContainer";

const Admin: React.FC<AdminConnectedProps> = ({ isAuth, id, login }) => {
    
    if (!isAuth) {
        return <Navigate  to={"/auth"} />
    }
    
    return (
        <>
            <AdminWrapper>
                <div>
                    <Title>Admin Panel</Title>
                </div>
                <UsersTableContainer />
                <ProductsTableContainer />
                <BlogsTableContainer />
            </AdminWrapper>
        </>
    );
}

export default Admin;