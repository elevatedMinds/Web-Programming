import React, { useEffect, useRef, useState } from 'react';
import './spin.css';

export default function Wheel({items, spinning, onSelectItem}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const wheelRef = useRef(null);

  useEffect(() => {
    if (spinning && items.length > 0){
        const randomIndex = Math.floor(Math.random() * items.length);
        setSelectedItem(randomIndex);

        const wheel = wheelRef.current;
        wheel.style.setProperty('--selected-item', randomIndex);
        wheel.classList.add('spinning');
        
        if (typeof onSelectItem === 'function'){
            const duration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--spinning-duration'))*1000;
            setTimeout(() => {
                onSelectItem(items[randomIndex]);
                wheel.classList.remove('spinning');
                wheel.classList.add('stopped');
            }, duration);
        }
    }
  }, [spinning, items, onSelectItem]);
  
  useEffect(()=>{
    if (!spinning && selectedItem!==null){
        const wheel = wheelRef.current;
        wheel.style.setProperty('--selected-item', selectedItem);
        wheel.classList.remove('spinning');
        wheel.classList.add('stopped');
        wheel.style.transform = `rotate(cal(${selectedItem}*(360deg/${items.length}))`;
    }
  },[spinning, selectedItem, items.length]);
  
  const wheelVars = {
    '--nb-item': items.length,
    '--selected-item': selectedItem,
  };

  return (
    <div className='wheel-container'>
        <div ref={wheelRef} className={`wheel ${spinning ? 'spinning' : 'stopped'}`} 
        style={wheelVars}>
            {items.map((item, index) => (
            <div className='wheel-item' key={index} style={{'--item-nb': index}}>
                {item}
            </div>
            ))}
        </div>
    </div>
  );
}