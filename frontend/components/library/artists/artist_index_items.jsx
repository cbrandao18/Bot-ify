import React from 'react'
import ArtistIndexItem from './artist_index_item';

class ArtistIndexItems extends React.Component {

    render(){
        let artistItems;
        if (this.props.artists) {
            artistItems = Object.keys(this.props.artists).map(artistId => {
                let artist = this.props.artists[artistId];
                return <ArtistIndexItem key={artist.id} artist={artist} />
            })
        }

        return (
            <div className="library-index-content">
                <ul className="library-index-list">
                    {artistItems}
                </ul>
            </div>
        )
    }
}

export default ArtistIndexItems;