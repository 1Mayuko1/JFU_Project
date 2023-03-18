import React from 'react';
import {Outlet} from "react-router-dom";
import {Footer, Navbar} from "../components";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
