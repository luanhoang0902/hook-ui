import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import "./style.css"
import { ThemeContext } from './ExampleContext';

Paragraph.propTypes = {
    
};

function Paragraph() {

    const theme = useContext(ThemeContext)

    return (
        <div>
            <h2 className={theme}>Đổi màu</h2>
        </div>
    );
}

export default Paragraph;