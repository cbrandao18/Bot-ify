import React from 'react'
import { Link } from 'react-router-dom';
import ArtistIndexItems from './artist_index_items';
import LibraryNavBar from '../../nav_bar/library_nav_bar';

class ArtistIndex extends React.Component {

    componentDidMount(){
        this.props.fetchArtists();
    }

    render(){

        return(
            <div className="artist-index-container">
                <div className="library-index-header">
                    <LibraryNavBar />
                </div>
                <ArtistIndexItems 
                    artists={this.props.artists}
                />
            </div>
        )
    }
}

export default ArtistIndex;