import React from "react";

import { AdminWrapper } from "./AdminStyles";
import Title from "components/Custom/Title/Title";
import TableSelector from "components/Custom/TableSelector/TableSelector";
export const AdminPanelContainer = () => {
    return (
        <AdminWrapper>
            <div>
                <Title>
                    Admin Panel
                    <TableSelector />
                </Title>
            </div>
        </AdminWrapper>
    )
}