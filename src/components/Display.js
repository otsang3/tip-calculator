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

    const handleInput = (event) => {
        setState(prevState => {
            return{
                ...prevState,
                [event.target.name]: event.target.value
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
                <input name="bill" onChange={handleInput} type="number" step="0.01" value={state.bill} required/>
                <p>How was your service?</p>
                <DropdownList handleTip={handleTip} state={state}/>
                <p>How many people are sharing the bill?</p>
                <input name="numOfPeople" onChange={handleInput} type="number" value={state.numOfPeople} required/>
                <div>
                    <input type="submit" value="Calculate tip"/>
                </div>
            </form>
        </div>
    )
}

export default Display;