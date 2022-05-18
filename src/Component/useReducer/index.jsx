import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

UseReducer.propTypes = {
    
};

function UseReducer(props) {
    return (
        <div>
            <h3>So sánh</h3>
            <ol>A. useState
                <li>Dùng với kiều dữ liệu nguyên thủy.</li>
                <li>Dữ liệu phức tạp thì ở mức đơn giản như một cấp.</li>
                <li>Dữ liệu phức tạp thì ở mức đơn giản như một cấp.</li>
            </ol>
            <ol>B. useReducer
                <li>Kiểu dữ liệu phức tạp hơn.</li>
                <li>Có rất nhiều state.</li>
                <li>Các state phụ thuộc nhau.</li>
            </ol>
            <ol>
                <img src="./3.png"/>
            </ol>
            <ol>C. Ví dụ
                <li><Link to= "/ExampleReducer">ExampleReducer</Link></li>
                <li><Link to="/TodoApp">TodoApp</Link></li>
            </ol>
        </div>
    );
}

export default UseReducer;