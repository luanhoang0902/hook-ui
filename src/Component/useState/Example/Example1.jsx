import React, { useState } from 'react';
import PropTypes from 'prop-types';

ExampleUseState.propTypes = {
    
};

function ExampleUseState(props) {
    const [counter, setCounter] = useState(1)

    const handleIncrease = () => {
        setCounter(counter+1)
    }
    return (
        <div style={{padding:20}}>ExampleUseState
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <ol>Luồng dữ liệu
                <li>Chạy từ trên xuống</li>
                <li>Gặp hàm handleIncrease thì khởi tọa hàm chứ chưa chạy</li>
                <li>Chạy xuống dưới. Khi bấm vào button thì gọi hàm handleIncrease</li>
                <li>Sau khi gọi setCounter thì React sẽ gọi lại component và re-reder ra màn hình</li>
            </ol>
        </div>
    );
}

export default ExampleUseState;