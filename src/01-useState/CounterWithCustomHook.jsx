import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1> Counter with Custom Hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => increment(2)}> Increase +2 </button>
            <button className="btn btn-secondary" onClick={() => decrement(2)}>Decrease -2</button>
            <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
        </>
    )
}