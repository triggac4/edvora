import React from "react";

const NavButton = ({ children, onClick, amount, isActive }) => {
    return (
        <>
            <button onClick={onClick} className="navigation flex flex-col">
                {`${children}${amount ? ` (${amount})` : ""}`}
                {isActive && <div className="w-full h-0.5 bg-white"></div>}
            </button>
        </>
    );
};

export default NavButton;
