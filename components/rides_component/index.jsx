import React from "react";

import MapComponent from "./map_component";
import RideInfo from "./ride_info";
import RideLocation from "./ride_location";
const RidesComponent = ({
    id,
    origin_station_code,
    station_path,
    date,
    destination_station_code,
    map_url,
    state,
    city,
    sortVal
}) => {
    const date_str = new Date(date).toLocaleDateString();
    return (
        <div className="flex bg-black mx-5 mb-3 p-3 rounded-md justify-between text-white items-start">
            <div className="flex gap-4">
                <MapComponent />
                <div className="flex flex-col justify-between ">
                    <RideInfo title={"Ride id"} value={id} />
                    <RideInfo
                        title={"Origin Station"}
                        value={origin_station_code}
                    />
                    <RideInfo
                        title={"station_path"}
                        value={`[${station_path.join(", ")}]`}
                    />
                    <RideInfo title={"Date"} value={date_str} />
                    <RideInfo
                        title={"Distance"}
                        value={sortVal}
                    />
                </div>
            </div>

            <div className="flex gap-3">
                <RideLocation value={state} />
                <RideLocation value={city} />
            </div>
        </div>
    );
};

export default RidesComponent;
