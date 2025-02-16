import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export function Header(){
    const location = useLocation();
    const isElementActive = location.pathname === '/';

    return (
        <header>
            <nav className='navigation-menu'>
            <menu>
                <NavLink to='/about'
                className={`navlink ${location.pathname === '/about' ? 'active' : ''}`}>
                    About
                </NavLink> <br/>
                <NavLink to='/play'
                className={`navlink ${location.pathname === '/favorites' ? 'active' : ''}`}>
                    Favorites
                </NavLink>
            </menu>
            </nav>
      </header>
    )
}

export function Login(){
    return (
        <div>
            <Header/>
        <main className="welcome">
            <h1>Welcome!</h1>
            <form method="get" action="play">
                <div className="login-field">
                <span className="icon">&#128100;</span>
                <input type="text" placeholder="Enter Username" />
                </div>
                <div className="login-field">
                <span className="icon">&#128188;</span>
                <input type="password" placeholder="Enter Password" />
                </div>

                <div className="buttons">
                <button className="login-button" type="submit">Login</button>
                <button className="login-button" type="submit">Register</button>
                </div>
            </form>
        </main>
        </div>
    );
}