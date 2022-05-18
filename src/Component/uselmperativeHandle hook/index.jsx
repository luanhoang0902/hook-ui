import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

UseImperativeHandle.propTypes = {
    
};

function UseImperativeHandle(props) {
    return (
        <div>
            <ol>A. useImperativeHandle
                <li>Sử dụng: Giúp tùy chỉnh được Ref của function component</li>
            </ol>
            <ol>B. Ví Dụ
                <li><Link to="/ExampleUseImperativeHandle">ExampleUseImperativeHandle</Link></li>
            </ol>
            <ol>Vấn đề:
                <li>Ref chỉ là một thành phần của component Video nhưng lại được open hết ra ngoài. Rất là nguy hiểm.</li>
                <li>Tính chất đóng gói: Khi open ra ngoài rất nhiều method mà không phải sử dụng tới gây ra mất tính toàn vẹn của dữ liệu cũng như có thể làm hỏng component.</li>
                <li>Vì bên ngoài có thể tương tác nhiều hơn đến cái đối tượng mà mình open ra bên ngoài.</li>
            </ol>
            <ol>Xử lý:
                <li>Dùng useImperativeHandle</li>
                <li>Đối số thứ nhất là ref: giá trị cần truyền lên component cha.</li>
                <li>Đối số thứ 2 hàm callback. Callback sẽ return ra một object . Và videoRef ở component cha sẽ nhận được object.</li>
                <li>Trong object tạo ra 2 method sử dụng cho component cha. Để tạo method play() và pause(). Cần sử dụng useRef để tạo.</li>
                <li>Ở đây dùng useRef để tạo method thoải mái vì ref nằm trong cùng 1 component nên không bị vấn đề open ra bên ngoài.</li>
            </ol>
            <ol>Chú ý:
                <li>Function component sẽ ko có Ref. Nên khi gán ref vào thẻ function component sẽ không được.</li>
            </ol>
        </div>
    );
}

export default UseImperativeHandle;