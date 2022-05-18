import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

UseMemo.propTypes = {
    
};

function UseMemo(props) {
    return (
        <div>
            <ol>A. useMemo
                <li>Là một hoocs giúp mình tạo ra một memorized value và chỉ tính toán ra value mới khi dependencies thay đổi.</li>
                <li>Còn lại tương tự useCallback.</li>
            </ol>
            <ol>B. Ví dụ
                <li><Link to="/ExampleMemo">ExampleMemo</Link></li>
            </ol>
        </div>
    );
}

export default UseMemo;