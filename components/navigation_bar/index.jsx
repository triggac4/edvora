import React, { useRef, useState } from "react";
import NavButton from "./nav_button";
import Filter from "./filter";
import { upComing, past, nearBy } from "../../pages";

const NavigationBar = ({ setFilter, length, setWhatRide }) => {
    const filter = useRef({ state: "all", city: "all" });
    const [whatPage, setWhatPage] = useState(nearBy);
    function onChange(e) {
        filter.current = { ...filter.current, [e.target.name]: e.target.value };
        setFilter(filter.current);
    }
    return (
        <nav className="flex bg-black-light px-5 py-3 items-center justify-between text-white">
            <div className="flex text-xs gap-4">
                <NavButton
                    onClick={() => {
                        setWhatRide(nearBy);
                        setWhatPage(nearBy);
                        console.log("clicked");
                    }}
                    isActive={whatPage === nearBy}
                >
                    Nearest ride
                </NavButton>
                <NavButton
                    onClick={() => {
                        setWhatPage(upComing);
                        setWhatRide(upComing);
                    }}
                    isActive={whatPage === upComing}
                    amount={length.upComing}
                >
                    Upcoming ride
                </NavButton>
                <NavButton
                    onClick={() => {
                        setWhatPage(past);
                        setWhatRide(past);
                    }}
                    isActive={whatPage === past}
                    amount={length.past}
                >
                    Past ride
                </NavButton>
            </div>
            <Filter onChange={onChange} />
        </nav>
    );
};

export default NavigationBar;
