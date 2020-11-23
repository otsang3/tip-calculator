import React from 'react';
import DropdownList from './DropdownList';

function Display() {

    return(
        <div>
            <p>How much was your bill?</p>
            <input type="number" step="0.01"/>
            <DropdownList/>
        </div>
    )
}

export default Display;