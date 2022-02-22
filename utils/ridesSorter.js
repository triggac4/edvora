class Rides {
    static filterRides(rides, filter) {
        const filtered = rides.filter((ride) => {
            const state = ride.state.toLowerCase();
            const city = ride.city.toLowerCase();
            const filterState = filter.state.toLowerCase();
            const filterCity = filter.city.toLowerCase();

            const stateMatch = state === filterState || filterState === "all";
            const cityMatch = city === filterCity || filterCity === "all";

            return stateMatch && cityMatch;
        });
        return filtered;
    }

    static dateIsGreater(date) {
        const today = Date.now();
        console.log(today);
        const checker = date - today;

        return checker > 0;
    }

    static nearBySort(rides, station_code) {
        const sortVal = rides.map((ride) => {
            const sort = [...ride.station_path].map((e) => {
                return Math.abs(e - station_code);
            });
            sort.sort((a, b) => a - b);
            return { ...ride, sortVal: sort[0] };
        });

        sortVal.sort((a, b) => a.sortVal - b.sortVal);
        return sortVal;
    }
}
export default Rides;
