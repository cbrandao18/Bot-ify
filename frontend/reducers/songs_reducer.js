import merge from 'lodash/merge';
import {
    RECEIVE_ALL_SONGS,
    RECEIVE_SONG,
} from '../actions/song_actions';

import { RECEIVE_ALBUM } from '../actions/album_actions'

const songsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            return action.songs
        case RECEIVE_SONG:
            return merge({}, state, { [action.song.id]: action.song })
        case RECEIVE_ALBUM:
            return merge({}, state, action.payload.songs)
        default:
            return state;
    }
}

export default songsReducer;