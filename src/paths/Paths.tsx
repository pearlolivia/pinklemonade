import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import('../components/Home/Home.tsx'));
const Paths = () => {
    return (
        <Routes>
            <Route
                path='*'
                element={
                    <Navigate
                        replace
                        to=''
                    />
                }
            />
            <Route
                path='/'
                element={<Home />}
            />
            <Route
                path='/upcoming-events'
                element={<div>Buy your tickets here</div>}
            />
        </Routes>
    )
}

export default Paths;