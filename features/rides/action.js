import apiCalls from "../../utils/apiCalls";
import Rides from "../../utils/ridesSorter";
import { setAllLocation } from "../location/action";

export const NEAREST_RIDE = "NEAREST_RIDE";
export const ALL_RIDE = "ALL_RIDE";
export const UPCOMING_RIDE = "UPCOMING_RIDE";
export const PAST_RIDE = "PAST_RIDE";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const pages = { nearBy: "near_by", upComing: "up_coming", past: "past" };

export const setAllRide = (rides, station_code) => async (dispatch) => {
  const nearestRides = Rides.nearBySort(rides, station_code);
  const state = ["all"];
  const city = ["all"];
  const upcomingRides = [];
  const pastRides = [];
  rides.forEach((ride) => {
    state.push(ride.state);
    city.push(ride.city);
    if (Rides.dateIsGreater(ride.date)) {
      upcomingRides.push(ride);
    } else pastRides.push(ride);
  });
  dispatch({
    type: ALL_RIDE,
    payload: rides,
  });
  dispatch(setAllLocation(state, city));
  dispatch(nearestRide(nearestRides));
  dispatch(upcomingRide(upcomingRides));
  dispatch(pastRide(pastRides));
};

export const nearestRide = (data) => (dispatch) => {
  dispatch({
    type: NEAREST_RIDE,
    payload: data,
  });
};

export const upcomingRide = (data) => (dispatch) => {
  dispatch({
    type: UPCOMING_RIDE,
    payload: data,
  });
};
export const pastRide = (data) => (dispatch) => {
  dispatch({
    type: PAST_RIDE,
    payload: data,
  });
};

export const changePage= (page) => (dispatch) => {
    dispatch({
        type: CHANGE_PAGE,
        payload: page,
    });
}