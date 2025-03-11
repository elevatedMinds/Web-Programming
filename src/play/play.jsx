import React, { useEffect, useState } from 'react';
import './play.css';
import { NavLink, useLocation } from 'react-router-dom';
import {MockData} from './mock.js';
import Wheel from './wheel.jsx';
import './spin.css';

export function Header(){
    const location = useLocation();
    return (
        <header>
            <nav className='navigation-menu'>
                <menu>
                    <NavLink to='/'
                        className={`navlink ${location.pathname === '/' ? 'active' : ''}`}>
                            Home
                    </NavLink> <br/>
                    <NavLink to='/favorites'
                        className={`navlink ${location.pathname === '/favorites' ? 'active' : ''}`}>
                            Favorites
                    </NavLink>
                </menu>
            </nav>
      </header>
    );
}

export function recordItem(item){
    let selectedItems = [];
    selectedItems.push(item);
    console.log(`added ${item}`);
}

export function Play(){
    const [data, setData] = useState({ objects: [] });
    const [isSpinning, setSpinning] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        MockData().then((result) => {
            console.log('Fetched: ', result)
            setData(result);
        });
    }, []);

    const spinManager = (item) => {
       // alert(`Selected: ${item}`);
        setSelectedItem(item);
        console.log(`${item}`);
        recordItem(item);
    }

    //state management -> start spinning!
    const startSpinning = () => {
        setSpinning(true);

        setTimeout(()=>{
            setSpinning(false);
        }, 2000);
    };

    return (
        <div>
            <Header/>
            <main>
                <h1 className="activity">Generator</h1>

                <div className='wrapper'>
                    <div className='container'>
                        <Wheel items={data.objects} 
                        spinning={isSpinning}
                        onSelectItem={spinManager}/>
                    </div>
                </div>
                
                <div className="actions">
                    <button className="retry-button" type="button" onClick={startSpinning}>Let's try again!</button>
                    <form method="get" action="favorites" className="choice-form">
                        <button className="choice-button" type="submit">Good Choice!</button>
                    </form>
                </div>

                <footer className="footer">
                    <p>Logged in as: [username]</p>
                    <span className="test-reset">Source</span><br />
                    <a href="https://github.com/elevatedMinds/Web-Programming"
                    >Github - Jessica Braithwaite</a>
                </footer>

            </main>
        </div>
    );
}
