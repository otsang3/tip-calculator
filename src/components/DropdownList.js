import React, { useState } from 'react';

function DropdownList() {

    const initialState = { "Outstanding": 30, "Good": 20, "Satisfactory": 10, "Poor": 5 }

    const [ state, setState ] = useState(initialState);

    const renderDropdown = () => {
        const arr = [];
        Object.keys(state).map((listItem, index) => arr.push(<option>{listItem} - {state[listItem]}%</option>))
        return arr;
    }

    return(
        <div>
            <select>
                {renderDropdown()}
            </select>
        </div>
    )
}

export default DropdownList;