import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="con">
            <header>
                <h1 className="text-white text-center bg-black">Header</h1>
            </header>
            <nav className="navigation">navigator</nav>
            <main className="main">{children}</main>
        </div>
    );
};

export default Layout;
