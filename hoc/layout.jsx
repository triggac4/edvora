import React from "react";

import Header from "../components/header";
import NavigationBar from "../components/navigation_bar";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <NavigationBar />
            <main className="main">{children}</main>
        </div>
    );
};

export default Layout;
