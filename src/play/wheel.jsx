import React, { useEffect, useRef } from 'react';
import './wheel.css'

const circleGenerator = () => {
    const circleContainerRef = useRef(null);

    useEffect(() => {
        generateCircle(); }, []);

    const generateCircle = () => {
        const circleContainer = circleContainerRef.current;
        if (circleContainer){
            const circle = document.createElement('div');
            circle.classList.add('circle');
            circleContainer.appendChild(circle);
        }
    };

    return (
        <div id="circle-container" ref={circleContainerRef}/>
    );
};

export default circleGenerator;