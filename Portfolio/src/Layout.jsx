import React, {useEffect} from "react";
import {Outlet, useLocation} from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {

    const {pathname} = useLocation();

    useEffect (() => {
        const titles = {
            "/home": "Home",
            "/about": "About",
            "/projects": "Projects",
            "/contact": "Contact",
        };
        document.title = titles[pathname] || "Portfolio";
        window.scrollTo({top: 0, behavior: 'smooth'});
        }, [pathname]);
    

    return (
        <>
            <Navbar />
            <main className="container">
            <Outlet />
            </main>
        </>
    );
}

export default Layout;
