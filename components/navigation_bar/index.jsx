import React, { useRef, useState } from "react";
import NavButton from "./nav_button";
import Filter from "./filter";
import { upComing, past, nearBy } from "../../pages";
import { useDispatch, useSelector } from "react-redux";
import { changePage, pages } from "../../features/rides/action";

const NavigationBar = () => {
    const currentPage=useSelector((state) => state.ride.CURRENT_PAGE);
    const upcomingRide=useSelector(state=>state.ride.UPCOMING_RIDE);
    const pastRide=useSelector(state=>state.ride.PAST_RIDE);
    const nearestRide=useSelector(state=>state.ride.NEAREST_RIDE);
    const changePageDispatch=useDispatch();
    console.log("check",currentPage);
    return (
        <nav className="flex bg-black-light px-5 py-3 items-center justify-between text-white">
            <div className="flex text-xs gap-4">
                <NavButton
                    onClick={() => {
                        changePageDispatch(changePage(pages.nearBy));
                        console.log("clicked");
                    }}
                    isActive={pages.nearBy === currentPage}
                    amount={nearestRide.length}
                >
                    Nearest ride
                </NavButton>
                <NavButton
                    onClick={() => {
                       changePageDispatch(changePage(pages.upComing));
                    }}
                    isActive={pages.upComing === currentPage}
                    amount={upcomingRide.length}
                >
                    Upcoming ride
                </NavButton>
                <NavButton
                    onClick={() => {
                       changePageDispatch(changePage(pages.past));
                    }}
                    isActive={pages.past === currentPage}
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
