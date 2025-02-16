import React from 'react';

export function Login(){
    return (
        <main className="welcome">
            <h1>Welcome!</h1>
            <form method="get" action="play.html">
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
    );
}