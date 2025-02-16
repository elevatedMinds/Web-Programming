import React from 'react';
import './favorites.css';
import { NavLink, useLocation } from 'react-router-dom';

export function Header(){
    const location = useLocation();
    const isElementActive = location.pathname === '/favorites';

    return (
        <header>
            <nav className='navigation-menu'>
            <menu>
                <NavLink to='/'
                className={`navlink ${location.pathname === '/' ? 'active' : ''}`}>
                    Home
                </NavLink> <br/>
                <NavLink to='/play'
                className={`navlink ${location.pathname === '/play' ? 'active' : ''}`}>
                    Generator
                </NavLink>
            </menu>
            </nav>
      </header>
    )
}

export function Favorites(){
    return (
        <div>
            <Header />
            <h1 className="activity">Favorites</h1>
                <div className="generatorWheel">
                    <svg viewBox="0 0 20 25" height="300" width="300">
                    <circle r="10" cx="10" cy="10" fill="grey"/>
                    <circle r="5" cx="10" cy="10" fill="grey"
                    stroke="#f051f0"
                    stroke-width="10"
                    stroke-dasharray="calc(35 * 31.42 / 100) 31.42" />
                    </svg>
                </div>
            <table>
                <thead>
                <tr>
                    <th>Fast Food Places</th>
                    <th>Percentage</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>McDonald's</td>
                    <td>75%</td>
                </tr>
                <tr>
                    <td>Wendy's</td>
                    <td>25%</td>
                </tr>
                </tbody>
                </table>
                <footer class="footer">
                    <p>Logged in as: [username]</p>
                    <span class="test-reset">Source</span><br />
                    <a href="https://github.com/elevatedMinds/Web-Programming"
                    >Github - Jessica Braithwaite</a>
                </footer>
        </div>
    )
}