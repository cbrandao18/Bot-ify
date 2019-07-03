import merge from 'lodash/merge';
import {
    RECEIVE_ALL_ARTISTS,
    RECEIVE_ARTIST,
} from '../actions/artist_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions'

import {RECEIVE_ALBUM} from '../actions/album_actions';

const artistsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_ARTISTS:
            return action.artists
        case RECEIVE_ARTIST:
            return merge({}, state, {[action.payload.artist.id]: action.payload.artist})
        case RECEIVE_ALBUM:
            return merge({}, state, { [action.payload.artist.id]: action.payload.artist })
        case RECEIVE_PLAYLIST:
            return merge({}, state, action.payload.artists)
        default:
            return state;
    }
}

export default artistsReducer;