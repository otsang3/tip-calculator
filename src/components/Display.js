import React, { useState } from 'react';
import DropdownList from './DropdownList';

function Display() {

    const initialState = {
        bill: '',
        numOfPeople: '',
        serviceLevel: '',
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

    const handleClear = () => {
        setState(initialState)
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
            {renderTip()}
            <form onSubmit={calculateTip}>
                <p>How much was your bill?</p>
                <input onChange={handleBill} type="number" step="0.01" value={state.bill} required/>
                <p>How was your service?</p>
                <DropdownList handleTip={handleTip} state={state}/>
                <p>How many people are sharing the bill?</p>
                <input onChange={handlePeople} type="number" value={state.numOfPeople} required/>
                <div>
                    <input type="submit" value="Calculate tip"/>
                </div>
            </form>
        </div>
    )
}

export default Display;