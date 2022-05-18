import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

UseState.propTypes = {
    
};

function UseState(props) {
    return (
        <div>
            <ol>A. GIới thiệu
                <li>Dùng khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu)</li>
                <li>Giúp function component có thể sử dụng state</li>
                <li>Input: initialState(giá trị hoặc function).</li>
                <li>Output: một mảng có 2 phần tử tương ứng cho state và setState. Giúp có thể cập nhật giá trị mới cho state.</li>
                <li>Cách dùng:const [name, setName] = useState('Luân')</li>
                <li>Component được re-render sau khi setState</li>
            </ol> 
            <ol>B. Array destructoring syntax<br/>
               You know before
               <li>const array = ['Easy','Frontend'];</li> 
               <li>const a = array[0]</li>
               <li>const a = array[1]</li>
               Now
               <li>const[a,b]=['Easy','Frontend'];</li>
            </ol>
            <ol>C. Khi làm việc với kiểu dữ liệu tham chiếu. Mỗi lần thay đổi style cần phải tạo ra một mảng mới</ol>
            <ol>D. useState sử dụng REPLACING chứ không phải MERGING
                <li>Khi gán dữ liệu mới cho setState sẽ lấy nguyên dữ liệu mới bỏ hết nhưng cái cũ.</li>
                <li>Giải pháp: lấy những state của thằng cũ qua và thêm những thuộc tính mới vào. Sử dụng ...sate.</li>
            </ol>\
            <ol>E. Initial state: 
                <li>Chỉ sử dụng lần đầu tiên.</li>
                <li>Nếu là dữ liệu đơn giản thì đưa thẳng vào.</li>
                <li>Nếu là tính toán phức tạp thì đưa vào callback để chạy một lần.</li>
            </ol>
            <ol>F. Ví dụng
                <li><Link to="/ExampleUseState">ExampleUseState</Link></li>
                <li><Link to="/RandomName">RandomName</Link></li>
                <li><Link to="/TowWay">TowWay</Link></li>
                <li><Link to="/Todolist">Todolist</Link></li>
            </ol>
        </div>
    );
}

export default UseState;