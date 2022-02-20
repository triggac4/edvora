import React from "react";
import NextImg from "next/image";

import map from "../../assets/img/png/map.png";
const MapComponent = () => {
    return (
        <figure className="overflow-hidden rounded-md">
            <NextImg src={map} alt="map" />
        </figure>
    );
};

export default MapComponent;
