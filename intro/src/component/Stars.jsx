import React from 'react';
import PropTypes from 'prop-types';

import Star from './Star.jsx';

export default function Stars({count}) {  

    return (
        <ul className="card-body-stars u-clearfix">
            {
                (count === 1 && <Star />) ||
                (count === 2 && <><Star /><Star /></>) ||
                (count === 3 && <><Star /><Star /><Star /></>) ||
                (count === 4 && <><Star /><Star /><Star /><Star /></>) ||
                (count === 5 && <><Star /><Star /><Star /><Star /><Star /></>)
            }
        </ul>
    );
}

Stars.defaultProps = {
    count: 0,
};

Stars.propTypes = {
    count: PropTypes.number,    
}  