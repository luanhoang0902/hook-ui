import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

UseContext.propTypes = {
    
};

function UseContext(props) {
    return (
        <div>
            <ol>useContext
                <li>Giúp đơn giản hóa việc truyền dữ liệu từ component cha xuống các component con.</li>
            </ol>
            <ol>Ví dụ
                <li><Link to="/ExampleContext">ExampleContext</Link></li>
            </ol>
        </div>
    );
}

export default UseContext;