import React from "react";

import Header from "../components/header";
import NavigationBar from "../components/navigation_bar";

const Layout = ({ imgSrc, name, setFilter, children, length, setWhatRide }) => {
    return (
        <div className="flex flex-col h-screen">
            <Header imgSrc={imgSrc} name={name} />
            <NavigationBar
                setFilter={setFilter}
                length={length}
                setWhatRide={setWhatRide}
            />
            <main className="bg-black-light flex-grow ">{children}</main>
        </div>
    );
};

export default Layout;
