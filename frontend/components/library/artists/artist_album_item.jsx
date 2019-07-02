import React from 'react'
import {Link} from 'react-router-dom';

class ArtistAlbumItem extends React.Component {

    render(){
        if (!this.props.album) return <></>

        let albumStyle = {
            backgroundImage: `url('${this.props.album.cover}')`
        }
        return (
            <li>
                <Link to={`/albums/${this.props.album.id}`}>
                    <div 
                        className="album-image"
                        style={albumStyle}
                    ></div>
                    <p className="album-title">{this.props.album.title}</p>
                </Link>
                <Link to={`/artists/${this.props.artist.id}`}>
                    <p className="album-artist">{this.props.artist.name}</p>
                </Link>
            </li>
        )
    }
}

export default ArtistAlbumItem;