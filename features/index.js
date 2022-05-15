import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as location } from "./location/reducer";
import { reducer as ride } from "./rides/reducer";

const initialState = {};
const reducer = combineReducers({ location,ride });
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;