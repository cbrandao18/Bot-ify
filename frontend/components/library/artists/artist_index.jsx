import React from 'react'
import { Link } from 'react-router-dom';
import ArtistIndexItem from './artist_index_item';
import LibraryNavBar from '../../nav_bar/library_nav_bar';

class ArtistIndex extends React.Component {

    componentDidMount(){
        this.props.fetchArtists();
    }

    render(){
        let artistItems;
        if (this.props.artists){
            artistItems = Object.keys(this.props.artists).map(artistId => {
                let artist = this.props.artists[artistId];
                return <ArtistIndexItem key={artist.id} artist={artist}/>
            })
        }

        return(
            <div className="artist-index-container">
                <div className="library-index-header">
                    <LibraryNavBar />
                </div>
                <div className="library-index-content">
                    <ul className="library-index-list">
                        {artistItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ArtistIndex;