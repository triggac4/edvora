import React from "react";
import NavButton from "./nav_button";

const NavigationBar = () => {
    return (
        <nav className="flex bg-black-light px-5 py-3 items-center justify-between text-white">
            <div className="flex text-xs gap-2">
                <NavButton isActive>Nearest ride</NavButton>
                <NavButton amount={5}>Upcoming ride</NavButton>
                <NavButton amount={6}>Past ride</NavButton>
            </div>
            <div className="h1">filter</div>
        </nav>
    );
};

export default NavigationBar;
