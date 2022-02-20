import styles from "../styles/Home.module.css";
import Layout from "../hoc/layout";
import RidesComponent from "../components/rides_component";

export default function Home() {
    return (
        <Layout>
            <RidesComponent />
            <RidesComponent />
            <RidesComponent />
            <RidesComponent />
            <RidesComponent />
        </Layout>
    );
}
