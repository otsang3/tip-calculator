import React, { useState } from 'react';

function DropdownList(props) {

    const initialState = { "Outstanding": 30, "Good": 20, "Satisfactory": 10, "Poor": 5 }

    const [ state, setState ] = useState(initialState);

    const handleChange = (event) => {
        props.handleTip(event.target.value)
    };

    const renderDropdown = () => {
        const arr = [];
        Object.keys(state).map((listItem, index) => arr.push(<option key={index} value={state[listItem]}>{listItem} - {state[listItem]}%</option>))
        return arr;
    };

    return(
        <div>
            <select onChange={handleChange}>
                <option disabled selected>Select an option</option>
                {renderDropdown()}
            </select>
        </div>
    )
}

export default DropdownList;