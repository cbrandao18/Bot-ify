import React from 'react'
import {Link} from 'react-router-dom'

class ArtistIndexItem extends React.Component {
    render(){
        return (
            <li className="artist-index-item">
                <Link to={`/artists/${this.props.artist.id}`}>
                    <div className="artist-index-image"></div>
                    <p>{this.props.artist.name}</p>
                </Link>
            </li>
        )
    }

}

export default ArtistIndexItem;