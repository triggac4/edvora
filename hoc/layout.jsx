import React from "react";

import Header from "../components/header";
import NavigationBar from "../components/navigation_bar";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <NavigationBar />
            <main className="bg-black-light flex-grow ">{children}</main>
        </div>
    );
};

export default Layout;
