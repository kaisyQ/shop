import thunk from 'redux-thunk'

import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './reducers/auth-reducer'
import usersReducer from './reducers/users-reducer'
import blogReducer from './reducers/blog-reducer'
import stylesReducer from './reducers/styles-reducer'

const reducers = combineReducers({
    auth: authReducer,
    users: usersReducer,
    blog: blogReducer,
    styles: stylesReducer
})

const store = configureStore({
    reducer: reducers,
    middleware: [thunk]
})

export default store