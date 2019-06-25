import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ current_user, logout }) => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-header">
                
            </div>
            <div className="nav-bar-footer">
                {current_user.username}
            </div>
        </div>
    )
}

export default NavBar;