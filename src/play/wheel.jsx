import React, { useEffect, useRef, useState } from 'react';
import { MockData } from './mock.js';
import './wheel.css'

function WheelContainer ({rotation}) {
    const WheelContainerRef = useRef(null);
    const [rotate, setRotation] = useState(rotation);
    const [randomObject, setRandom] = useState(MockData[0]);

    useEffect(() => {
        console.log('rotation: '); }, [rotate]);

    const spinner = () => {
        const newRotation = rotation + Math.ceil(Math.random() * 100);
        const index = Math.floor(Math.random() * MockData.length);
        setRotation(newRotation);
        setRandom(MockData[index]);
    };

    return (
        <div id="wheel-container" ref={WheelContainerRef}>
            <div className='display'>
                {randomObject}
            </div>
            <button onClick={spinner}>
                Spin
            </button>
        </div>
    );
};

export default WheelContainer;