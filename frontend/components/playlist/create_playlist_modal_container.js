import { connect } from 'react-redux';
import React from 'react'
import CreatePlaylistModal from './create_playlist_modal';
import { createPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
    return ({
        currentUserId: state.session.id,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createPlaylist: (playlist) => dispatch(createPlaylist(playlist))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylistModal)