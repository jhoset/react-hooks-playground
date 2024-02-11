import PropTypes from 'prop-types';
import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {

    console.log(' Me volvi a generar ')

    return (
        <button
            onClick={() => increment(5)}
            className="btn btn-outline-info w-100">
            Increment
        </button>
    )

})


ShowIncrement.propTypes = {
    increment: PropTypes.func
}
ShowIncrement.displayName = "ShowIncrement"