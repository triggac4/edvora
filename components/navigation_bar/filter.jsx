import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setState } from "../../features/location/action";

const Filter = () => {
  const [display, setDisplay] = useState(false);
  const state = useSelector((state) => state.location.allState);
  const city = useSelector((state) => state.location.allCity);
  const selectedState = useSelector((state) => state.location.selectedState);
  const selectedCity = useSelector((state) => state.location.selectedCity);
  const dispatch = useDispatch();

  function changeDisplay() {
    const check = !display;
    setDisplay(check);
  }
  return (
    <div className="relative cursor-pointer" onClick={changeDisplay}>
      filter
      {display && (
        <div className="text-white flex flex-col w-40 shadow-md gap-3 bg-black-light p-4 absolute right-0 ">
          <label htmlFor="state">state:</label>
          <select
            onChange={(e) => dispatch(setState(e.target.value))}
            className="bg-black-dark"
            name="state"
            id="state"
            onClick={(e) => e.stopPropagation()}
          >
            {state.map((state, i) => {
              return (
                <option selected={selectedState===state} value={state} key={i}>
                  {state}
                </option>
              );
            })}
          </select>
          <label htmlFor="city" onClick={(e) => e.stopPropagation()}>
            city:
          </label>
          <select
            onChange={(e)=>dispatch(setCity(e.target.value))}
            className="bg-black-dark"
            name="city"
            id="city"
            onClick={(e) => e.stopPropagation()}
          >
            {city.map((city, i) => {
                return (
                    <option selected={selectedCity===city} value={city} key={i}>
                    {city}
                    </option>
                );
            }
            )}
          </select>
        </div>
      )}
    </div>
  );
};

export default Filter;
