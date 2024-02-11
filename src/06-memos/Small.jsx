import PropTypes from 'prop-types'
import { memo } from 'react';

export const Small = memo(({value}) => {
    console.log('Me volvi a dibujar :( ');

    return <small> {value} </small>
});

Small.displayName = 'Small'

Small.propTypes = {
    value: PropTypes.number
}