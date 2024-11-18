import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { urls } from "../consts/urls";

const Home = lazy(() => import('../components/Home'));
const Tickets = lazy(() => import('../components/Tickets'));
const Gallery = lazy(() => import('../components/Gallery'));
const Reviews = lazy(() => import('../components/Reviews'));
const Merch = lazy(() => import('../components/Merch'));
const Contact = lazy(() => import('../components/Contact'));
const About = lazy(() => import('../components/About'));

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
                path={urls.tickets}
                element={<Tickets />}
            />
            <Route
                path={urls.gallery}
                element={<Gallery />}
            />
            <Route
                path={urls.reviews}
                element={<Reviews />}
            />
            <Route
                path={urls.merch}
                element={<Merch />}
            />
            <Route
                path={urls.contact}
                element={<Contact />}
            />
            <Route
                path={urls.about}
                element={<About />}
            />
        </Routes>
    )
}

export default Paths;