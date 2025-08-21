import {Outlet, useLocation} from 'react-router-dom';
import {useEffect} from "react";
import Navbar from './Navbar';

export default function Layout() {
    const {pathname} = useLocation();

    useEffect = () => {
    const titles = {
        "/": "Home",
        "/about": "About",
        "/projects": "Projects",
        "/contact": "Contact",
    };
    document.title = titles[pathname] || "Portfolio";
    window.scrollTo({top: 0, behavior: 'smooth'});
    }, [pathname];

    return (
        <>
            <Navbar />
            <main className="container">
            <Outlet />
            </main>
        </>
    );
}
