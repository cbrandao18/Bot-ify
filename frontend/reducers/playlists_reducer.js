import merge from 'lodash/merge';
import { RECEIVE_ALL_PLAYLISTS, 
        RECEIVE_PLAYLIST,
        REMOVE_SONG_FROM_PLAYLIST,
        REMOVE_PLAYLIST} from '../actions/playlist_actions';

const playlistsReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists
        case RECEIVE_PLAYLIST:
            return merge({}, state, {[action.payload.playlist.id]: action.payload.playlist})
        case REMOVE_SONG_FROM_PLAYLIST:
            const oldSongIds = state[action.payload.playlistId].song_ids
            const newSongIds = oldSongIds.filter((songId) => songId != action.payload.songId)
            const newPlaylist = Object.assign({}, state[action.payload.playlistId], { song_ids: newSongIds})
            return Object.assign({}, state, { [action.payload.playlistId]: newPlaylist })
        case REMOVE_PLAYLIST:
            let newState = merge({}, state);
            delete newState[action.playlistId]
            return newState;
        default: 
            return state;
    }
}

export default playlistsReducer;