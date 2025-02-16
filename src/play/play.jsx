import React from 'react';
import './play.css';

export function Play(){
    return (
        <main>
            <h1>Generator</h1>
            <img src="images/wheel.png" alt="clouds" width="450" height="300" /><br />

            <div class="actions">
            <button class="retry-button" type="button">Let's try again!</button>
            
            <form method="get" action="favorites.html" class="choice-form">
                <button class="choice-button" type="submit">Good Choice!</button>
            </form>
            </div>

        </main>
    )
}