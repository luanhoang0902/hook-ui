import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

UseCallBack.propTypes = {
    
};

function UseCallBack(props) {
    return (
        <div>
            <ol>A. Kiến thức bổ trợ: React.memo
                <li>Memoization.</li>
                <p>•Giúp tăng tốc độ xử lý máy tính lên.</p>
                <p>•Bằng cách lưu trữ lại dữ liệu của những lần tính toán trước đó lên.</p>
                <p>•Để lần sau sử dụng không cần tính toán lại khi gặp bộ input cũ.</p>
                <p>•Thường dùng cho những hàm tính toán xử lý phức tạp.</p>
                <li>React.memo().</li>
                <p>•Là một HOC.</p>
                <p>•Tương tự như PureComponent.</p>
                <p>•Chỉ render lại component nếu props thay đổi.</p>
                <p>•Sữ dụng kĩ thuật so sánh: ===</p>
                <p>•Cách dùng:</p>
                <p>import {`{memo}`} form ‘react’</p>
                <p>export default React.memo(Component).</p>
                <p>•Dùng khi component render ra những cái phức tạp và nặng.</p>
            </ol>
            <ol>B. useCallback
                <li>•Là một react hooks giúp tạo ra một memorized callback và chỉ tạo ra callback mới khi dependencies thay đổi.</li>
                <li>•Nhận vào 2 tham số: 1 là function, 2 là dependencies.</li>
                <li>•Return memorized callback.</li>
                <li>•Chỉ tạo ra function mới khi dependencies thay đổi.</li>
                <li>•Nếu dùng empty dependencies thì không bao giờ tạo ra function mới.</li>
            </ol>
            <ol>B. Ví dụ
                <li><Link to="/ExampleCallback">ExampleCallback</Link></li>
            </ol>
            
        </div>
    );
}

export default UseCallBack;