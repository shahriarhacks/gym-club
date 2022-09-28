import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <nav className='nav'>
            <div className="nav-logo">
                <img className="logo" src={logo} alt="" />
                <h1>Time 2 Time </h1>
            </div>
            <div className="nav-menu">
                <a href="/home">Home</a>
                <a href="/services">Services</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;