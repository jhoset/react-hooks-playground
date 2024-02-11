import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {


    const [counter, setCounter] = useState(0);

    const incrementFather = useCallback((x) => {
        console.log('calling setCounter')
        setCounter((value) => value + x);
    }, [])

    useEffect(() => {
        // incrementFather();
    }, [incrementFather])

    // const increment = () => {
    //     setCounter(counter + 1);
    // }


    return (
        <>
            <h1> useCallback Hook: {counter} </h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )


}