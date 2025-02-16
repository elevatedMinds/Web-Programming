import React from 'react';
import './about.css';
import { NavLink, useLocation } from 'react-router-dom';

export function Header(){
    const location = useLocation();
    const isElementActive = location.pathname === '/about';

    return (
        <header>
            <nav className='navigation-menu'>
            <menu>
                <NavLink to='/'
                className={`navlink ${location.pathname === '/' ? 'active' : ''}`}>
                    Home
                </NavLink>
            </menu>
            </nav>
      </header>
    )
}

export function About(){
    return (
        <div>
        <Header/>
        <main className="description">
            <h1>About</h1>
            <img src="beach.png" alt="clouds" width="200" height="250" />
            <p>
                With all of the fast foods options today it can sometimes be difficult
                to pinpoint exactly what you are craving for. With Choosi, that decision
                is less daunting and fun! Instead of wasting time debating on food
                options, Choosi's takes the highest rated fast food places in your area
                and complies them into a random generator that you can use to figure out
                where to eat. Make life easier and let Choosi decide for you!
            </p>
            <h2>How it works</h2>
            <p>
                Our generator takes some of the highest rated fast food places in your
                area and randomly selects an option for you. <br />You have the choice
                to spin the wheel again by clicking the "Let's try again" button or
                confirming your satisfaction with the selected option by clicking on the
                "Good Choice" button.<br />
                We aim to please, which is why we have the option to review someone of
                your past selected options on the home page.<br />
                Have fun and enjoy!
            </p>
    </main>
    </div>    
    )
}