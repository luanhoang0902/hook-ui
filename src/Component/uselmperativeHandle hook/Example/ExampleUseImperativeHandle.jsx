import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Video from './Video';


ExampleUseImperativeHandle.propTypes = {
    
};

function ExampleUseImperativeHandle(props) {

    const videoRef = useRef()

    const handlePlay = () => {
        videoRef.current.play()
    }

    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <div>
            <Video ref={videoRef}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick = {handlePause}>Pause</button>
        </div>
    );
}

export default ExampleUseImperativeHandle;