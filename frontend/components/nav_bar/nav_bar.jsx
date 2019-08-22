import React from 'react';
import { NavLink } from 'react-router-dom';

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

                <NavLink className="nav-bar-link" to={'/browse/featured'}>
                    <i className="fas fa-home"></i>
                    <span>Home</span>
                </NavLink>
                {/* <NavLink className="nav-bar-link" to={'/browse/search'}>
                    <i className="fas fa-search"></i>
                    <span>Search</span>
                </NavLink> */}
                <NavLink className="nav-bar-link" to={'/browse/library/playlists'}>
                    <i className="fas fa-music"></i>
                    <span>Your Library</span>
                </NavLink>

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