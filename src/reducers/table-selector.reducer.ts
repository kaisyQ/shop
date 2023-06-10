import React from "react";

const SWAP_MAIN_ROUTE = 'SWAP_MAIN_ROUTE';


export interface IRoute {
    id: number,
    path: string,
    title: string
}


export const initialState = {
    routes: [
        {
            id: 1,
            path: '/admin/productsTable',
            title: 'Products'
        },
        {
            id: 2,
            path: '/admin/postsTable',
            title: 'Posts'
        }
    ] as IRoute[],
    
    mainRoute: {
        id: 0,
        path: '/admin',
        title: 'Users'
    } as IRoute
}


type SwapMainRouteAction = typeof SWAP_MAIN_ROUTE;

export type InitialStateType = typeof initialState;


export const swapMainRoute = (payload: IRoute) => ({
    type: SWAP_MAIN_ROUTE,
    payload: payload
})

type ActionType = ReturnType<typeof swapMainRoute>; 

export type DispatchTableSelectorType = React.Dispatch<ActionType>;

const reducer = (state: InitialStateType, action: ActionType) => {
    switch(action.type) {
        case SWAP_MAIN_ROUTE: 
            return {
                ...state,
                mainRoute: {...action.payload},
                routes: [state.mainRoute, ...state.routes.filter(route=>route.id!==action.payload.id)]
            }
        default: 
            throw new Error("BAD ACTION TYPE");
    }

}


export default reducer;