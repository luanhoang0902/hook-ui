import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

DomEvent.propTypes = {
    
};

function DomEvent(props) {
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [width,setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY>=200){
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        }
        window.addEventListener('scroll',handleScroll)
        
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        
        return () => {
            window.addEventListener('resize',handleResize)
        }
    })
    return (
        <div style = {{height: '300vh'}}>
            <h1>{width}</h1>
            {showGoToTop && (
                <button
                style ={{
                    position: 'fixed',
                    right: '0',
                    bottom: '0'
                }}
                >
                    Go to Top
                </button>
            )}
        </div>
    );
}

export default DomEvent;