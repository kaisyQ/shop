import React from "react";

const SWAP_MAIN_ROUTE = 'TABLE-SELECTOR/SWAP_MAIN_ROUTE';
const SET_EMPLOYEE_ROUTES = "TABLE-SELECTOR/SET_EMPLOYEE_ROUTES"
const SET_ADMIN_ROUTES = "TABLE-SELECTOR/SET_ADMIN_ROUTES"

export interface IRoute {
    id: number,
    path: string,
    title: string
}

const usersRoute: IRoute = { id: 0, path: '/admin/usersTable', title: 'Users' };
const productsRoute: IRoute = { id: 1, path: '/admin/productsTable', title: 'Products' };
const postsRoute: IRoute = { id: 2, path: '/admin/postsTable', title: 'Posts' };

export type InitialStateType = {
    routes: IRoute[],
    mainRoute: IRoute
}

export const initialState: InitialStateType = {
    routes: [],
    mainRoute: productsRoute
}


export const swapMainRoute = (payload: IRoute) => ({
    type: SWAP_MAIN_ROUTE as typeof SWAP_MAIN_ROUTE,
    payload: payload
});

export const setEmployeeRoutes = () => ({
    type: SET_EMPLOYEE_ROUTES as typeof SET_EMPLOYEE_ROUTES
});

export const setAdminRoutes = () => ({
    type: SET_ADMIN_ROUTES as typeof SET_ADMIN_ROUTES
})


type SwapMainRouteType = ReturnType<typeof swapMainRoute>; 
type SetEmployeeRoutesType = ReturnType<typeof setEmployeeRoutes>; 
type SetAdminRoutesType = ReturnType<typeof setAdminRoutes>;


type ActionType = SwapMainRouteType | SetEmployeeRoutesType | SetAdminRoutesType;

export type DispatchTableSelectorType = React.Dispatch<ActionType>;

export const actions = {
    swapMainRoute, setEmployeeRoutes, setAdminRoutes
};

const reducer = (state: InitialStateType, action: ActionType) => {
    switch(action.type) {
        case SWAP_MAIN_ROUTE: 
            return {
                ...state,
                mainRoute: {...action.payload},
                routes: [state.mainRoute, ...state.routes.filter(route=>route.id!==action.payload.id)]
            }
        case SET_EMPLOYEE_ROUTES: 
            return {
                ...state,
                routes: [postsRoute],
                mainRoute: productsRoute
            }
        case SET_ADMIN_ROUTES: 
            return {
                ...state,
                routes: [usersRoute, postsRoute],
                mainRoute: productsRoute
            }
        default: 
            throw new Error("BAD ACTION TYPE");
    }

}


export default reducer;