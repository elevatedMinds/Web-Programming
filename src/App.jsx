import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App(){
    return (
            <div className="body">
                <header>
                    <h1>Choosi</h1>
                    <nav>
                        <menu>
                        <a className="menu" href="about.html">About</a> <br />
                        <a className="menu" href="favorites.html">Favorites</a>
                        </menu>
                    </nav>
                    </header>
            </div>
    )
}

export default App;