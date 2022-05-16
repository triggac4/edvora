import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Layout from "../hoc/layout";
import RidesComponent from "../components/rides_component";
import Rides from "../utils/ridesSorter";
import { getRides, getUserInfo } from "../utils/apiCalls";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../features";


export default function Home({ user, rides, error }) {
  return error ? (
    <h2>something went wrong</h2>
  ) : (
    <Provider store={store}>
      <Layout user={user} rides={rides}/>
    </Provider>
  );
}

export async function getServerSideProps() {
  try {
    const rides = await getRides();
    const user = await getUserInfo();

    return {
      props: {
        user,
        rides,
        error: false,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        user: {},
        rides: [],
        error: e.message,
      },
    };
  }
}
