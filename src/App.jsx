import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login.jsx'
import { About } from './about/about.jsx'
import { Favorites } from './favorites/favorites.jsx'
import { Play } from './play/play.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(){
    return (
        <BrowserRouter>
            <div className="body">
                <header className="header-bar">
                    <h1>Choosi</h1>
                </header>
                
                <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/about' element={<About />} exact />
                <Route path='/favorites' element={<Favorites />} exact />
                <Route path='/play' element={<Play />} />
                <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="footer">
                    <span className="test-reset">Source</span><br />
                    <a href="https://github.com/elevatedMinds/Web-Programming"
                        >Github - Jessica Braithwaite</a>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

export default App;