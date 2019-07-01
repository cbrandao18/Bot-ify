import React from 'react'
import {Link} from 'react-router-dom'

class ArtistIndexItem extends React.Component {
    render(){
        let artistImageStyle = {
            backgroundImage: `url('${this.props.artist.hero}')`
        }
        return (
            <li className="artist-index-item">
                <Link to={`/artists/${this.props.artist.id}`}>
                    <div 
                        className="artist-index-image"
                        style={artistImageStyle}    
                    ></div>
                    <p>{this.props.artist.name}</p>
                </Link>
            </li>
        )
    }

}

export default ArtistIndexItem;