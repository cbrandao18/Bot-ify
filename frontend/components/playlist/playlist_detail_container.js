import { connect } from 'react-redux';
import PlaylistDetail from './playlist_detail'
import { fetchPlaylist, deletePlaylist } from '../../actions/playlist_actions'
import { fetchArtists } from '../../actions/artist_actions'
import { fetchPlaylists, addSongToPlaylist, removeSongFromPlaylist } from '../../actions/playlist_actions'
import { songEnded } from '../../actions/now_playing_actions'

const mapStateToProps = (state, ownProps) => {
    const playlist = state.entities.playlists[ownProps.match.params.playlistId];
    let user;
    if (playlist){
        user = state.entities.users[playlist.owner_id]
    }
    return {
        playlist: playlist,
        playlists: state.entities.playlists,
        songs: state.entities.songs,
        albums: state.entities.albums,
        artists: state.entities.artists,
        user: user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
        deletePlaylist: (id) => dispatch(deletePlaylist(id)),
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        fetchArtists: () => dispatch(fetchArtists()),
        addSongToPlaylist: (data) => dispatch(addSongToPlaylist(data)),
        removeSongFromPlaylist: (data) => dispatch(removeSongFromPlaylist(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);