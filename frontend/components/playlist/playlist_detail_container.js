import { connect } from 'react-redux';
import PlaylistDetail from './playlist_detail'
import { fetchPlaylist, deletePlaylist } from '../../actions/playlist_actions'

const mapStateToProps = (state, ownProps) => {
    const playlist = state.entities.playlists[ownProps.match.params.playlistId];
    let user;
    if (playlist){
        user = state.entities.users[playlist.owner_id]
    }
    return {
        playlist: playlist,
        user: user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
        deletePlaylist: (id) => dispatch(deletePlaylist(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);