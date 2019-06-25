import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ current_user, logout }) => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-header">
                <div className="nav-bar-logo">
                    <a href="#">
                        <div className="white-logo"></div>
                        <p>Botify</p>
                    </a>
                </div>

                <div className="nav-bar-link">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </div>
                <div className="nav-bar-link">
                    <i class="fas fa-search"></i>
                    <span>Search</span>
                </div>
                <div className="nav-bar-link">
                    <i class="fas fa-music"></i>
                    <span>Your Library</span>
                </div>

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