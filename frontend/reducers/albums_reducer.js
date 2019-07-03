import merge from 'lodash/merge';
import {
    RECEIVE_ALL_ALBUMS,
    RECEIVE_ALBUM,
} from '../actions/album_actions';

import { RECEIVE_ARTIST } from '../actions/artist_actions';

import { RECEIVE_PLAYLIST } from '../actions/playlist_actions'

const albumsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_ALBUMS:
            return action.albums
        case RECEIVE_ALBUM:
            return merge({}, state, { [action.payload.album.id]: action.payload.album })
        case RECEIVE_ARTIST:
            return merge({}, state, action.payload.albums)
        case RECEIVE_PLAYLIST:
            return merge({}, state, action.payload.albums)
        default:
            return state;
    }
}

export default albumsReducer;