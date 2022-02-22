import React, { useRef } from "react";
import NavButton from "./nav_button";
import Filter from "./filter";
const NavigationBar = ({ setFilter, length }) => {
    const filter = useRef({ state: "all", city: "all" });

    function onChange(e) {
        filter.current = { ...filter.current, [e.target.name]: e.target.value };
        setFilter(filter.current);
    }
    return (
        <nav className="flex bg-black-light px-5 py-3 items-center justify-between text-white">
            <div className="flex text-xs gap-4">
                <NavButton isActive>Nearest ride</NavButton>
                <NavButton amount={length.upComing}>Upcoming ride</NavButton>
                <NavButton amount={length.past}>Past ride</NavButton>
            </div>
            <Filter onChange={onChange} />
        </nav>
    );
};

export default NavigationBar;
