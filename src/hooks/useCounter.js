import { useState } from "react";

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (amount = 1) => {
        setCounter((current) => current + amount);
    }
    const decrement = (amount = 1) => {
        if ( counter - amount < 0 ) return
        setCounter((current) => current - amount);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return { counter, increment, decrement, reset};
}