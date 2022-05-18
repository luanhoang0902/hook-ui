import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

UseRef.propTypes = {
    
};

function UseRef(props) {
    return (
        <div>
            <ol>
                A. Giúp lưu các giá trị qua một tham chiếu bên ngoài function component
                <li>Tên biến = useRef(giá trị khởi tạo dùng 1 lần).</li>
                <li>Khi fuction component render lại không bị thay đổi giá trị giữ được giá trị của lần xử lý trước.</li>
                <li>Muốn dùng giá trị của nó thì: tên biến.current</li>
                <li>Gán giá trị: tên biến.current = giá trị mới</li>
                <li>Giúp in trạng thái hiện tại và trước đó của count</li>
                <li>Lấy tọa đọa của thẻ html</li>
            </ol>
            <ol>B. Ví dụ
                <li><Link to="/ExampleRef">ExampleRef</Link></li>
            </ol>
            <ol>Chốt lại
                <li>•Một component có thể nhận rất nhiều props.</li>
                <li>•Trong đó props có thể là dữ liệu nguyên thủy(tham trị), kiểu dữ liệu phức tạp( tham chiếu).</li>
                <li>•Nếu sử dung React memo dể tránh component con re-render không cần thiết. Thì các hàm sử dụng trong component con khi viết hàm cần dùng useCallback hết.</li>
                <li>•Nếu không sử dụng memo cho component con thì ko cần useCallback.</li>
            </ol>
        </div>
    );
}

export default UseRef;