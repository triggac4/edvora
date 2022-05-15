import { ALL_RIDE, NEAREST_RIDE, PAST_RIDE, UPCOMING_RIDE } from "./action";
const initialState = {
  allRide: [],
  NEAREST_RIDE: [],
  PAST_RIDE: [],
  UPCOMING_RIDE: [],

};

export const reducer=(state=initialState, action)=>{
    switch (action.type) {
        case ALL_RIDE:
        return {
            ...state,
            allRide: action.payload,
        };
        case NEAREST_RIDE:
        return {
            ...state,
            NEAREST_RIDE: action.payload,
        };
        case PAST_RIDE:
        return {
            ...state,
            PAST_RIDE: action.payload,
        };
        case UPCOMING_RIDE:
        return {
            ...state,
            UPCOMING_RIDE: action.payload,
        };
        default:
        return state;
    }
}
