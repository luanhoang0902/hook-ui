import React, { useState } from 'react';
import PropTypes from 'prop-types';

RandomName.propTypes = {
    
};

function RandomName(props) {
    const array = [
        'Hoàng',
        'Văn',
        'Luân'
    ];
    const handleOnClick = () => {
        const index = Math.floor(Math.random()*array.length);
        setName(array[index])
    }
    const [name, setName] = useState('Chưa có phần thưởng')
    return (
        <div style = {{padding: 32}}>
            <h1>{name}</h1>
            <button onClick={handleOnClick}>Lấy phần thưởng</button>
        </div>
    );
}

export default RandomName;