const initialState = {
    rides: [],
    filter: { state: "all", city: "all" },
    nearest: [],
    upcoming: [],
    past: [],
};

export const changeAllState = "ALL";
export const filter = "FILTER";

export default function RideReducer(state = initialState, action) {
    switch (action.type) {
        case changeAllState:
            return {
                ...state,
                rides: action.payload.rides,
                filter: action.payload.filter,
                nearest: action.payload.nearest,
                upcoming: action.payload.upcoming,
                past: action.payload.past,
            };
        case filter:
            return { ...state, filter: action.payload };

        default:
            return state;
    }
}
