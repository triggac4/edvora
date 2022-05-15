import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/header";
import NavigationBar from "../components/navigation_bar";
import RidesComponent from "../components/rides_component";
import { setAllLocation } from "../features/location/action";
import { pages, setAllRide } from "../features/rides/action";
import Rides from "../utils/ridesSorter";


const Layout = ({ user: { url, name, station_code }, rides }) => {
  const filterState = useSelector((state) => state.location.selectedState);
  const filterCity = useSelector((state) => state.location.selectedCity);
  const rideState= useSelector((state) => state.ride);
  const currentPage=useSelector((state) => state.ride.CURRENT_PAGE);
  const rideDispatch = useDispatch();


  useEffect(() => {
    rideDispatch(setAllRide(rides, station_code));
  }, [rides, rideDispatch, station_code]);


  const whatDisplay =
    currentPage === pages.upComing
      ? rideState.UPCOMING_RIDE
      : currentPage === pages.past
      ? rideState.PAST_RIDE
      : rideState.NEAREST_RIDE;
  const ridesFiltered = Rides.filterRides(whatDisplay, {
    state: filterState,
    city: filterCity,
  }).map((ride, i) => {
    return <RidesComponent key={i} {...ride} />;
  });
  const imgSrc = url;

  return (
    <div className="flex flex-col h-screen">
      <Header imgSrc={imgSrc} name={name} />
      <NavigationBar/>
      <main className="bg-black-light flex-grow ">{ridesFiltered}</main>
    </div>
  );
};

export default Layout;
