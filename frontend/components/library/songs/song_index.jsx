import React from 'react'
import LibraryNavBar from '../../nav_bar/library_nav_bar';
import SongIndexItem from '../../song/song_index_item';

class SongIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        this.props.fetchArtists()
            .then(() => this.props.fetchAlbums())
            .then(() => this.props.fetchSongs())
            .then(() => this.props.fetchPlaylists())
            .then(() => this.setState({ loading: false }))
    }

    render(){

        if (this.state.loading) {
            return <div className="song-index-container"></div>
        }

        let songItems = Object.keys(this.props.songs).map((songId, index) => {
            let song = this.props.songs[songId];
            let album = this.props.albums[song.album_id];
            let artist = this.props.artists[album.artist_id];
            let queue = Object.keys(this.props.songs).slice(index).map(Number);
            return (
                <SongIndexItem
                    key={`song-${songId}`}
                    song={song}
                    artist={artist}
                    queue={queue}
                    isPlaying={this.props.isPlaying}
                    setSongQueue={this.props.setSongQueue}
                    playlists={this.props.playlists}
                    addSongToPlaylist={this.props.addSongToPlaylist}
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