import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "./pages/sign_up/SignUp";
import SignIn from "./pages/sign_in/SignIn";
import SuccessSignIn from "./pages/success_sign_in/SuccessSignIn";

const App =() => {
    const navigation = useNavigate()
    useEffect(() => {
        if (window.location.pathname === '/') {
            navigation('/sign-up')
        }
    }, [window.location.pathname])
    return (
        <div className="App">
            <Routes>
                <Route index element={<SignUp/>} path={'/sign-up'}/>
                <Route index element={<SignIn/>} path={'/sign-in'}/>
                <Route index element={<SuccessSignIn/>} path={'/success'}/>
            </Routes>
        </div>
    );
}

export default App;
