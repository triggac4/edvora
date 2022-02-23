import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Layout from "../hoc/layout";
import RidesComponent from "../components/rides_component";
import Rides from "../utils/ridesSorter";

export const nearBy = "near_by";
export const upComing = "up_coming";
export const past = "past";
export default function Home({
    user: { profile_key, name, station_code },
    rides,
    error,
}) {
    const [filter, setFilter] = useState({ state: "All", city: "All" });
    const [sorted, setSorted] = useState([]);
    const [whatRide, setWhatRide] = useState(nearBy);
    const upComingRides = [];
    const pastRides = [];
    useEffect(() => {
        setSorted(Rides.nearBySort(rides, station_code));
    }, [rides, station_code]);
    rides.forEach((ride) => {
        if (Rides.dateIsGreater(ride.date)) upComingRides.push(ride);
        else pastRides.push(ride);
    });

    const whatDisplay =
        whatRide === upComing
            ? upComingRides
            : whatRide === past
            ? pastRides
            : sorted;
    const ridesFiltered = Rides.filterRides(whatDisplay, filter).map(
        (ride, i) => {
            return <RidesComponent key={i} {...ride} />;
        }
    );
    const imgSrc = !(profile_key == "url") && profile_key;
    return error ? (
        <h2>something went wrong</h2>
    ) : (
        <Layout
            name={name}
            imgSrc={imgSrc}
            setFilter={setFilter}
            length={{ upComing: upComingRides.length, past: pastRides.length }}
            setWhatRide={setWhatRide}
        >
            {ridesFiltered}
        </Layout>
    );
}

export async function getServerSideProps() {
    try {
        const userResponse = await fetch(
            "https://edvora30555.herokuapp.com//api/user-info"
        );
        const rideResponse = await fetch(
            "https://edvora30555.herokuapp.com//api/rides"
        );

        if (userResponse.status >= 300 || rideResponse.status >= 300) {
            throw Error("an error occurred could not be found");
        }
        const user = await userResponse.json();
        const rides = await rideResponse.json();

        return {
            props: {
                user,
                rides,
                error: false,
            },
        };
    } catch (e) {
        return {
            props: {
                user: {},
                error: e.message,
            },
        };
    }
}
