import React, { useState } from 'react';
import DropdownList from './DropdownList';

function Display() {

    const initialState = {
        numOfPeople: 0,
        tip: 0
    }

    const [ state, setState ] = useState(initialState);

    const handleTip = (percentage) => {
        setState(prevState => {
            return{
                ...prevState,
                tip: parseInt(percentage)
            }
        })
    }

    return(
        <div>
            <p>How much was your bill?</p>
            <input type="number" step="0.01"/>
            <DropdownList handleTip={handleTip}/>
        </div>
    )
}

export default Display;