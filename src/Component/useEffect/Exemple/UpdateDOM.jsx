import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

UpdateDOM.propTypes = {
    
};

function UpdateDOM(props) {
    const [title, setTitle] = useState('')

    useEffect(() => {
        document.title = title
        document.querySelector('.luan').innerHTML = `Đây là: ${title}`
        
    })
    return (
        <div>
            <input
            value={title}
            onChange={e =>setTitle(e.target.value)}
            />
            <div className="luan"></div>
        </div>
    );
}

export default UpdateDOM;