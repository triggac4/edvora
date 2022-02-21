import { createStore } from "redux";
import RideReducer from "./reducer";

const store = createStore(
    RideReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
