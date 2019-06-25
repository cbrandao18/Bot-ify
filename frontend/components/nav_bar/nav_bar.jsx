import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ current_user, logout }) => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-header">
                
            </div>
            <div className="nav-bar-footer">
                <p>{current_user.username}</p>
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