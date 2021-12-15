import {Route, Routes, Navigate} from 'react-router-dom'
import React from "react";

const SignIn = React.lazy(() => import('../pages/signin'))
const SignUp = React.lazy(() => import('../pages/signup'))
const Home = React.lazy(() => import('../pages/home'))

export const useRoutes = (isAuthenticated: boolean) => {
    console.log(SignUp)
    if (!isAuthenticated) {
        return (
            <Routes>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="*" element={<Navigate to="/signin" />}/>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="*" element={<Navigate to="/home" />}/>
        </Routes>
    )
}