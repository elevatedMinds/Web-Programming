import React from 'react';
import './play.css';
import { NavLink, useLocation } from 'react-router-dom';

export function Header(){
    const location = useLocation();
    const isElementActive = location.pathname === '/play';

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
    )
}

export function Play(){
    return (
        <div>
            <Header/>
        <main>
            <h1 className="activity">Generator</h1>
            <img src="wheel.png" alt="clouds" width="450" height="300" /><br />

            <div class="actions">
            <button class="retry-button" type="button">Let's try again!</button>
            
            <form method="get" action="favorites" class="choice-form">
                <button class="choice-button" type="submit">Good Choice!</button>
            </form>
            </div>
            <footer class="footer">
                <p>Logged in as: [username]</p>
                <span class="test-reset">Source</span><br />
                <a href="https://github.com/elevatedMinds/Web-Programming"
                >Github - Jessica Braithwaite</a>
            </footer>

        </main>
        </div>
    )
}