import React, { memo } from 'react';
import PropTypes from 'prop-types';

Content.propTypes = {
    
};

function Content({onIncrease}) {
    console.log('render lại...')
    return (
        <div>
            <h2>Xin chào</h2>
            <button onClick={onIncrease}>Click me</button>
        </div>
    );
}

export default memo(Content);