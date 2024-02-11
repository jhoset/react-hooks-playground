import { useEffect, useState } from "react"


export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const onMouseMoveHandler = ({ x, y }) => {
            // const coords = { x, y }
            // console.log(coords)
            setCoords({ x, y })
        }



        window.addEventListener('mousemove', onMouseMoveHandler)
        console.log("Message Component Mounted");

        return () => {
            // window.removeEventListener('mousemove', onMouseMoveHandler)
            console.log("Message Component Unmounted")
        }
    }, [])



    return (
        <>
            <div className="alert alert-info" role="alert">
                <h3> User already exists! </h3>
                <hr />
                { JSON.stringify(coords) }
            </div>
        </>
    )
}