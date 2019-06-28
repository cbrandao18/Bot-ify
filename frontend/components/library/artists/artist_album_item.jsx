import React from 'react'
import {Link} from 'react-router-dom';

class ArtistAlbumItem extends React.Component {
    render(){
        return (
            <li>
                <Link to={`/albums/${this.props.album.id}`}>
                    <div className="album-image"></div>
                    <p>{this.props.album.title}</p>
                </Link>
            </li>
        )
    }
}

export default ArtistAlbumItem;