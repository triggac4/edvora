import React from "react";

import MapComponent from "./map_component";
import RideInfo from "./ride_info";
import RideLocation from "./ride_location";
const RidesComponent = () => {
    return (
        <div className="flex bg-black mx-5 mb-3 p-3 rounded-md justify-between text-white items-start">
            <div className="flex gap-4">
                <MapComponent />
                <div className="flex flex-col justify-between ">
                    <RideInfo title={"Ride id"} value={"002"} />
                    <RideInfo title={"Origin Station"} value={20} />
                    <RideInfo
                        title={"station_path"}
                        value={`[${[23, 343, 54, 65, 67].join(",")}]`}
                    />
                    <RideInfo title={"Date"} value={"15th Feb 2022 16:43"} />
                    <RideInfo title={"Distance"} value={1} />
                </div>
            </div>

            <div className="flex gap-3">
                <RideLocation value="Manhara" />
                <RideLocation value="Panvel" />
            </div>
        </div>
    );
};

export default RidesComponent;
