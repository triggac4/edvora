/* eslint-disable @next/next/no-img-element */
import React from "react";
import NextImg from "next/image";

import avatar from "../../assets/img/jpg/avatar.jpg";

const Header = ({ name, imgSrc }) => {
    return (
        <header className="flex text-lg font-semibold bg-black-dark items-center justify-between space- px-5 py-1">
            <h1 className="text-white text-left ">{name ?? "Edvora"}</h1>
            <figure className="h-11 w-11 rounded-full overflow-hidden">
                <img src={imgSrc || avatar} alt="DP" />
            </figure>
        </header>
    );
};

export default Header;
