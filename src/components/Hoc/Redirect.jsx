import React from "react"

import { Navigate } from "react-router-dom"

const withAuthRedirect = (Component) => {
    
    const RedirectComponent = (props) => {
        console.log(props)
        if (!props.isAuth) return <Navigate to='/admin/login' />
        
        return <Component {...props} />
    }
    return RedirectComponent
}

export default withAuthRedirect