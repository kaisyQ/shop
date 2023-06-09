import React from "react";
import { NavLink } from "react-router-dom";


export const Routes: React.ReactElement[] = [
    <NavLink to="/admin">Users</NavLink>,
    <NavLink to="/admin/productsTable">Products</NavLink>,
    <NavLink to="/admin/postsTable">Posts</NavLink>
]

export const changeTriggerLi = (number: number) => {
    const temp : React.ReactElement = Routes[0]
    Routes[0] = Routes[number]
    Routes[number] = temp
}