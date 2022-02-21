import React from "react";
import NavButton from "./nav_button";
import Filter from "./filter";
const NavigationBar = () => {
    function onChange(e) {
        console.log({ [e.target.name]: e.target.value });
    }
    return (
        <nav className="flex bg-black-light px-5 py-3 items-center justify-between text-white">
            <div className="flex text-xs gap-4">
                <NavButton isActive>Nearest ride</NavButton>
                <NavButton amount={5}>Upcoming ride</NavButton>
                <NavButton amount={6}>Past ride</NavButton>
            </div>
            <Filter onChange={onChange} />
        </nav>
    );
};

export default NavigationBar;
