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
                        <NavLink className="menu" to="about">
                            About
                        </NavLink>
                        <NavLink className="menu" to="favorites">
                            Favorites
                        </NavLink>
                        </menu>
                    </nav>
                    </header>
            </div>
    )
}

export default App;