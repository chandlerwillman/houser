import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <img src="https://github.com/DevMountain/simulation-2/blob/master/assets/houser_logo.png?raw=true" alt="houser logo" />
                    <h1>Houser</h1>
                </div>
            </div>
        </nav>
    );
}