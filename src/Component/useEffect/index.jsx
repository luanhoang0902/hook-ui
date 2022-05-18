import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

UseEffect.propTypes = {
    
};

function UseEffect(props) {
    return (
        <div>
            <ol>useEffect: Dùng khi muốn side effects. Tạo ra luồng xử lý bên cạnh luồng chính. Giúp không làm gián đoạn luồng chính.</ol>
            <ol>A. Side effect: Chương trình phần mềm khi có tác động xảy ra dẫn tới dữ liệu của chương trình bị thay đổi. 
                <li>Gọi lấy dữ liệu.</li>
                <li>Tương tác với DOM.</li>
                <li>Subscriptions.</li>
                <li>setTimeout, setInterval.</li>
            </ol>
            <ol>Chia làm 2 loại
                <li>Effects: không cần clean up: gọi API, tương tác DOM.</li>
                <li>Effect: cần lean up: subscriptions, setTimeout, setInterval.</li>
            </ol>
            <ol>B. useEffect()
             <li>Sử dụng cho side effects.</li>
             <li>Mỗi hook gồm 2 phần: side effect và clean up.</li>
             <li>Được thực thi sau mỗi lần render.</li>
             <li>Được thực hiện ít nhất một lần sau lần render đầu tiên.</li>
             <li>Những lần render sau chỉ được thực thi nếu có dependencies thay đổi</li>
             <li>Effect cleanup sẽ được thực thi trước khi run Effect lần tiếp theo hoặc unmount.</li>
            </ol>
            <ol>C. Syntax:
                <p><img src="./1.PNG"/></p>
            </ol>
            <ol>D. Cách Chạy
                <p><img src="./2.PNG"/></p>
                <li>Lần render đầu tiên:</li>
                <p>•Sẽ render jsx trước </p>
                <p>•Sau đó mới run useEffect. Không run Cleanup.</p>
                <li>Lần render tiếp theo( ví dụ Update).</li>
                <p>•Render trước</p>
                <p>•Sau đó run Cleanup: để cleanup state lần trước nếu deps thay đổi.</p>
                <p>•Run useEffect lần thứ 2.</p>
                <li>Khi gỡ component.</li>
                <p>•Run Cleanup.</p>
            </ol>
            <ol>E. Dependencies 
                <li>Không có: useEffect luôn luôn được chạy mỗi lần render.</li>
                <li>Deps là rỗng: Chỉ được chạy một lần đầu tiên.</li>
                <li>Deps là một tham số: Chạy lần đầu tiên.Những lần sau chỉ được chạy lại sau mỗi lần render khi deps thay đổi.</li>
            </ol>
            <ol>F. Các ứng dụng
                <li>Không cần leanup: Lấy dữ liệu dùng useEffect chỉ chạy 1 lần.</li>
                <li>Cần cleanup: Đồng hồ.</li>
            </ol>
            <ol>G. Ví dụ
                <li><Link to="/UpdateDOM">UpdateDOM</Link></li>
                <li><Link to="/CallApi">CallApi</Link></li>
                <li><Link to="/DomEvent">DomEvent</Link></li>
                <li><Link to="/Timer">Timer</Link></li>
                <li><Link to="/PreviewAvatar">PreviewAvatar</Link></li>
            </ol>
            
        </div>
    );
}

export default UseEffect;