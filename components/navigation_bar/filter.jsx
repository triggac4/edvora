import React, { useState } from "react";

const Filter = ({ onChange }) => {
    const [display, setDisplay] = useState(false);

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
                        onChange={onChange}
                        className="bg-black-dark"
                        name="state"
                        id="state"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="sontiala">sontiala</option>
                    </select>
                    <label htmlFor="city" onClick={(e) => e.stopPropagation()}>
                        city:
                    </label>
                    <select
                        onChange={onChange}
                        className="bg-black-dark"
                        name="city"
                        id="city"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <option value="Panvel">Panvel</option>
                        <option value="Serinla">Serinla</option>
                    </select>
                </div>
            )}
        </div>
    );
};

export default Filter;
