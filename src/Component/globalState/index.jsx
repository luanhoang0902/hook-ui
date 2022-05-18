import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

GlobalState.propTypes = {
    
};

function GlobalState(props) {
    return (
        <div>
            <ol><h3>Sử dụng kết hợp để tạo GlobalState</h3>
                <li>useContext</li>
                <li>useReducer</li>
            </ol>
            <ol><h3>So sánh Redux và useContext</h3>
                <li></li>
                <li></li>
            </ol>
            <ol>Thiết lập
                <li><Link to = "/GlobalState">GlobalState</Link></li>
            </ol>
        </div>
    );
}

export default GlobalState;