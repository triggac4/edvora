import styles from "../styles/Home.module.css";
import Layout from "../hoc/layout";
import RidesComponent from "../components/rides_component";

export default function Home({
    user: { profile_key, name, station_code },
    rides,
    error,
}) {
    const imgSrc = !(profile_key == "url") && profile_key;
    return error ? (
        <h2>something went wrong</h2>
    ) : (
        <Layout name={name} imgSrc={imgSrc}>
            {rides.map((ride, i) => {
                return <RidesComponent key={i} {...ride} />;
            })}
        </Layout>
    );
}

export async function getServerSideProps() {
    try {
        const userResponse = await fetch("http://localhost:3000/api/user-info");
        const rideResponse = await fetch("http://localhost:3000/api/rides");

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
                error: { e },
            },
        };
    }
}
