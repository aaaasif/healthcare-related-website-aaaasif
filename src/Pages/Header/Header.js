import React from 'react';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const heartIcon = <FontAwesomeIcon icon={faHeartbeat} />
    return (
        <div>
            <header className="header">
                <a href="#" className="logo">{heartIcon} <span className=".text-dark">MediLab.</span></a>
    
                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#services">services</a>
                    <a href="#about">about</a>
                    <a href="#doctors">doctors</a>
                    <a href="#book">book</a>
                    <a href="#review">review</a>
                    <a href="#blogs">blogs</a>
                </nav>
    
                <div id="menu-btn" className="fas fa-bars"></div>
            </header>
        </div>
    );
};

export default Header;