import React from 'react'
import {Link} from 'react-router-dom';

class ArtistAlbumItem extends React.Component {

    render(){
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
                    <p>{this.props.album.title}</p>
                </Link>
            </li>
        )
    }
}

export default ArtistAlbumItem;