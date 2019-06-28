import React from 'react'

class ArtistIndexItem extends React.Component {
    render(){
        return (
            <li className="artist-index-item">
                <div className="artist-index-image"></div>
                <p>{this.props.artist.name}</p>
            </li>
        )
    }

}

export default ArtistIndexItem;