import React from 'react';
import { NavLink } from 'react-router-dom';

class LibraryNavBar extends React.Component {
    render(){
        return (
            <div className="library-index-nav">
                <NavLink to='/browse/library/playlists' className="nav-item">Playlists</NavLink>
                <NavLink to='/browse/library/songs' className="nav-item">Songs</NavLink>
                <NavLink to='/browse/library/albums' className="nav-item">Albums</NavLink>
                <NavLink to='/browse/library/artists' className="nav-item">Artists</NavLink>
            </div>
        )
    }
}

export default LibraryNavBar;