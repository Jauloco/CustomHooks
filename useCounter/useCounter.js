import { useState } from "react"
import PropTypes from 'prop-types';

export const useCounter =( initialValue = 1, maxValue, minValue ) => {

    const [ counter, setCounter ] = useState(initialValue);

    const increment = ( value = 1 ) => {
        if (!(maxValue) ? true : counter < maxValue  ) {
            setCounter( counter + value);
        }
    }
    const decrement = ( value = 1 ) => {
        if (!(minValue) ? true: counter > minValue  ) {
            setCounter( counter - value) ;
        }
    }
    const reset = () =>{
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
useCounter.propTypes = {
    counter: PropTypes.number,
    maxValue: PropTypes.number,
    minValue: PropTypes.number
}