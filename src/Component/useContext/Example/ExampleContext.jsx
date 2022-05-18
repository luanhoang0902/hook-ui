import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Content from './Content';

ExampleContext.propTypes = {
    
};

export const ThemeContext = createContext()

function ExampleContext(props) {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme==='dark'?'light':'dark');
    }
    return (
        <ThemeContext.Provider value={theme}>
            <div style ={{padding: 20}}>
                <button onClick={toggleTheme}>ToggleTheme</button>
                <Content/>
            </div>
        </ThemeContext.Provider>
        
    );
}

export default ExampleContext;