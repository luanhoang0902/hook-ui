import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Content from './Content';

ExampleCallback.propTypes = {
    
};

function ExampleCallback(props) {
    const [count, setCount] = useState(0)
    const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1 )
    },[])
    return (
        <div style={{padding: '10px 32px'}}>
            <Content onIncrease = {handleIncrease}/>
            <h1>{count}</h1>
        </div>
    );
}

export default ExampleCallback;