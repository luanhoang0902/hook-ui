import React from 'react';
import PropTypes from 'prop-types';

// import video1 from './tiktok.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react'

Video.propTypes = {
    
};

function Video(props, ref) {

    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    
    return (
        <div>
            <video
            ref = {videoRef} 
            src = "./tiktok.mp4"
            width = {280}
            >

            </video>
        </div>
    );
}

export default forwardRef(Video);