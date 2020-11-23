import React, { useState } from 'react';
import DropdownList from './DropdownList';

function Display() {

    const initialState = {
        numOfPeople: 0,
        tip: 0
    }

    const [ state, setState ] = useState(initialState);

    const handlePeople = (event) => {
        setState(prevState => {
            return{
                ...prevState,
                numOfPeople: parseInt(event.target.value)
            }
        })
    }

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
            <p>How was your service?</p>
            <DropdownList handleTip={handleTip}/>
            <p>How many people are sharing the bill?</p>
            <input onChange={handlePeople} type="number"/>
        </div>
    )
}

export default Display;