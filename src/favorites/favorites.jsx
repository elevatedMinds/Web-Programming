import React from 'react';
import './favorites.css';

export function Favorites(){
    return (
        <main>
            <h1>Favorites</h1>
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
        </main>
    )
}