import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

export const receiveAllPlaylists = (playlists) => {
    return {
        type: RECEIVE_ALL_PLAYLISTS,
        playlists
    }
}

export const receivePlaylist = (playlist) => {
    return {
        type: RECEIVE_PLAYLIST,
        playlist
    }
}

export const removePlaylist = (playlistId) => {
    return {
        type: REMOVE_PLAYLIST,
        playlistId
    }
}

export const fetchPlaylists = () => (dispatch) => {
    return PlaylistApiUtil.fetchPlaylists()
        .then(playlists => dispatch(receiveAllPlaylists(playlists)))
}

export const fetchPlaylist = (id) => (dispatch) => {
    return PlaylistApiUtil.fetchPlaylist(id)
        .then(payload => dispatch(receivePlaylist(payload.playlist)))
}


export const createPlaylist = (playlist) => (dispatch) => {
    return PlaylistApiUtil.createPlaylist(playlist)
        .then(payload => dispatch(receivePlaylist(payload.playlist)))
}

export const deletePlaylist = (playlistId) => (dispatch) => {
    return PlaylistApiUtil.removePlaylist(playlistId)
        .then(playlists => dispatch(receiveAllPlaylists(playlists)))
}