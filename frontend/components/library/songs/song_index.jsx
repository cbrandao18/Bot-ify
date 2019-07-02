import React from 'react'
import LibraryNavBar from '../../nav_bar/library_nav_bar';
import SongIndexItem from '../../song/song_index_item';

class SongIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchArtists();
        this.props.fetchAlbums();
        this.props.fetchSongs();
    }

    render(){
        if (Object.keys(this.props.songs).length === 0) {
            return <></>
        }
        if (Object.keys(this.props.albums).length === 0) {
            return <></>
        }
        if (Object.keys(this.props.artists).length === 0) {
            return <></>
        }

        let songItems = Object.keys(this.props.songs).map(songId => {
            let song = this.props.songs[songId];
            let album = this.props.albums[song.album_id];
            let artist = this.props.artists[album.artist_id];
            return (
                <SongIndexItem
                    key={`song-${songId}`}
                    song={song}
                    artist={artist}
                    isPlaying={this.props.isPlaying}
                    setSongQueue={this.props.setSongQueue}
                />
            )
        })
        return (
            <div className="song-index-container">
                <div className="library-index-header">
                    <LibraryNavBar />
                </div>
                <div className="tracklist-container">
                    {songItems}
                </div>
            </div>
        )
    }

}

export default SongIndex;