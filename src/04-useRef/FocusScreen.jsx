import { useRef } from "react";

export const FocusScreen = () => {


    const inputRef = useRef();

    function onClick() {
        inputRef.current.select();
    }

    return (
        <>
            <h2> Focus HTML Element </h2>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder="Enter your username"
                className="form-control" />
            <br />

            <button onClick={() => onClick()} className="btn btn-dark w-100"> Focus </button>
        </>
    )
}