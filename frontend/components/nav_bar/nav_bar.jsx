import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ current_user, logout }) => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-header">
                <div className="nav-bar-logo">
                    <a href="#">
                            <div className="white-logo nav-logo"></div>
                            <p>Botify</p>
                    </a>
                </div>

                <Link className="nav-bar-link" to={'/browse/featured'}>
                    <i className="fas fa-home"></i>
                    <span>Home</span>
                </Link>
                <Link className="nav-bar-link" to={'/browse/search'}>
                    <i className="fas fa-search"></i>
                    <span>Search</span>
                </Link>
                <Link className="nav-bar-link" to={'/browse/library'}>
                    <i className="fas fa-music"></i>
                    <span>Your Library</span>
                </Link>

            </div>
            <div className="nav-bar-footer">
                
                <p className="session-user">
                    <i className="fas fa-user"></i>
                    {current_user.username}
                </p>
                <a 
                className="green-button logout-nav" 
                onClick={logout.bind(this)}>
                    Logout
                </a>
            </div>
        </div>
    )
}

export default NavBar;