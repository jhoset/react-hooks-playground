import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';
export const Info = ({ locationName, name, image }) => {

    const locationNameRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        const { width, height } = locationNameRef.current.getBoundingClientRect();

        setBoxSize({ width, height })

        return () => {
        };
    }, [locationName])


    return (
        <div className="d-flex justify-content-center gap-4 align-items-center alert alert-info" role="alert">
            <img src={image} className="rounded-circle" alt="Cinque Terre" height={100} ></img>
            <blockquote className="blockquote text-center">
                <p className="mb-1"> <span ref={locationNameRef}>{locationName}</span>  </p>
                <br />
                <footer className="blockquote-footer">  {name} </footer>
            </blockquote>
            <code className='code'> {  JSON.stringify(boxSize) } </code>
        </div>
    )
}

Info.propTypes = {
    locationName: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string
}