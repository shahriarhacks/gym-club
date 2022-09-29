import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <nav className='nav'>
            <div className="nav-logo">
                <img className="logo" src={logo} alt="" />
                <h1>gYm Club </h1>
            </div>
        </nav>
    );
};

export default Header;