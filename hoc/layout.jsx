import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/header";
import NavigationBar from "../components/navigation_bar";
import RidesComponent from "../components/rides_component";
import { setAllLocation } from "../features/location/action";
import { setAllRide } from "../features/rides/action";
import Rides from "../utils/ridesSorter";

export const nearBy = "near_by";
export const upComing = "up_coming";
export const past = "past";

const Layout = ({ user: { url, name, station_code }, rides }) => {
  const filterState = useSelector((state) => state.location.selectedState);
  const filterCity = useSelector((state) => state.location.selectedCity);
  const rideState= useSelector((state) => state.ride);
  const dispatch = useDispatch();
  const rideDispatch = useDispatch();

  //const [filter, setFilter] = useState({ state: "All", city: "All" });
  //const [sorted, setSorted] = useState([]);
  const [whatRide, setWhatRide] = useState(nearBy);
  const upComingRides = [];
  const pastRides = [];
  useEffect(() => {
    rideDispatch(setAllRide(rides, station_code));
  }, [rides, rideDispatch, station_code]);

  const whatDisplay =
    whatRide === upComing
      ? rideState.UPCOMING_RIDE
      : whatRide === past
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
      <NavigationBar
        setWhatRide={setWhatRide}
      />
      <main className="bg-black-light flex-grow ">{ridesFiltered}</main>
    </div>
  );
};

export default Layout;
