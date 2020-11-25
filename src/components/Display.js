import React, { useState } from 'react';
import DropdownList from './DropdownList';

function Display() {

    const initialState = {
        bill: 0,
        numOfPeople: 1,
        serviceLevel: null,
        tip: null
    }

    const [ state, setState ] = useState(initialState);

    const calculateTip = (e) => {
        e.preventDefault();
        const tip = (((state.bill / 100) * state.serviceLevel) / state.numOfPeople);
        
        setState(prevState => {
            return{
                ...prevState,
                tip: Math.round(tip * 100) / 100
            }
        })
    }

    const handleBill = (event) => {
        setState(prevState => {
            return {
                ...prevState,
                bill: event.target.value
            }
        })
    }

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
                serviceLevel: parseInt(percentage)
            }
        })
    }

    const renderTip = () => {
        if (state.tip) {
            return(
                <div>The tip is {state.tip} per person</div>
            )
        }
    }

    return(
        <div>
            <form onSubmit={calculateTip}>
                {renderTip()}
                <p>How much was your bill?</p>
                <input onChange={handleBill} type="number" step="0.01" required/>
                <p>How was your service?</p>
                <DropdownList handleTip={handleTip}/>
                <p>How many people are sharing the bill?</p>
                <input onChange={handlePeople} type="number" required/>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default Display;