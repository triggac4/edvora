import React, { useRef, useState } from "react";
import NavButton from "./nav_button";
import Filter from "./filter";
import { upComing, past, nearBy } from "../../pages";
import { useSelector } from "react-redux";

const NavigationBar = ({ setWhatRide }) => {
    const [whatPage, setWhatPage] = useState(nearBy);
    const upcomingRide=useSelector(state=>state.ride.UPCOMING_RIDE);
    const pastRide=useSelector(state=>state.ride.PAST_RIDE);
    const nearestRide=useSelector(state=>state.ride.NEAREST_RIDE);
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
                    amount={nearestRide.length}
                >
                    Nearest ride
                </NavButton>
                <NavButton
                    onClick={() => {
                        setWhatPage(upComing);
                        setWhatRide(upComing);
                    }}
                    isActive={whatPage === upComing}
                    amount={upcomingRide.length}
                >
                    Upcoming ride
                </NavButton>
                <NavButton
                    onClick={() => {
                        setWhatPage(past);
                        setWhatRide(past);
                    }}
                    isActive={whatPage === past}
                    amount={pastRide.length}
                >
                    Past ride
                </NavButton>
            </div>
            <Filter />
        </nav>
    );
};

export default NavigationBar;
