import { connect } from 'react-redux';
import PlaylistDetail from './playlist_detail'
import { fetchPlaylist, deletePlaylist } from '../../actions/playlist_actions'
import { fetchSong } from '../../actions/song_actions'
import { isPlaying, setSongQueue } from '../../actions/now_playing_actions'
import { fetchPlaylists, addSongToPlaylist, removeSongFromPlaylist } from '../../actions/playlist_actions'

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
        ui: state.ui
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
        deletePlaylist: (id) => dispatch(deletePlaylist(id)),
        isPlaying: () => dispatch(isPlaying()),
        setSongQueue: (queue) => dispatch(setSongQueue(queue)),
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        addSongToPlaylist: (data) => dispatch(addSongToPlaylist(data)),
        removeSongFromPlaylist: (data) => dispatch(removeSongFromPlaylist(data)),
        fetchSong: (id) => dispatch(fetchSong(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);