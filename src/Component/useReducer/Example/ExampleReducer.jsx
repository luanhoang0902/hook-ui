import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

ExampleReducer.propTypes = {
    
};
const initState = 0
const UP_ACTION = ''
const DOWN_ACTION = ''
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}
function ExampleReducer(props) {
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div style = {{padding: '0 20px'}}>
            <h1>{count}</h1>
            <button 
            onClick={()=>dispatch(DOWN_ACTION)}
            >
            Down
            </button>
            <button 
            onClick={()=>dispatch(UP_ACTION)}
            >
            Up
            </button>
        </div>
    );
}

export default ExampleReducer;