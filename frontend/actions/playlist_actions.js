import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const REMOVE_SONG_FROM_PLAYLIST = 'REMOVE_SONG_FROM_PLAYLIST';

export const receiveAllPlaylists = (playlists) => {
    return {
        type: RECEIVE_ALL_PLAYLISTS,
        playlists
    }
}

export const receivePlaylist = (payload) => {
    return {
        type: RECEIVE_PLAYLIST,
        payload
    }
}

export const receiveRemoveSongFromPlaylist = (payload) => {
    return {
        type: REMOVE_SONG_FROM_PLAYLIST,
        payload
    }
}

export const removePlaylist = (playlistId) => {
    return {
        type: REMOVE_PLAYLIST,
        playlistId
    }
}

export const addSongToPlaylist = (data) => (dispatch) => {
    return PlaylistApiUtil.addSongToPlaylist(data)
}

export const removeSongFromPlaylist = (payload) => (dispatch) => {
    dispatch(receiveRemoveSongFromPlaylist(payload))
    return PlaylistApiUtil.removeSongFromPlaylist(payload);
}

export const fetchPlaylists = () => (dispatch) => {
    return PlaylistApiUtil.fetchPlaylists()
        .then(playlists => dispatch(receiveAllPlaylists(playlists)))
}

export const fetchPlaylist = (id) => (dispatch) => {
    return PlaylistApiUtil.fetchPlaylist(id)
        .then(payload => dispatch(receivePlaylist(payload)))
}

export const createPlaylist = (playlist) => (dispatch) => {
    return PlaylistApiUtil.createPlaylist(playlist)
        .then(payload => dispatch(receivePlaylist(payload)))
}

export const deletePlaylist = (playlistId) => (dispatch) => {
    dispatch(removePlaylist(playlistId))
    return PlaylistApiUtil.removePlaylist(playlistId)
        .then(playlists => dispatch(receiveAllPlaylists(playlists)))
}