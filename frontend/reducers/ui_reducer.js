import { combineReducers } from 'redux';

import isPlayingReducer from './now_playing_reducer';
import queueReducer from './queue_reducer';

const uiReducer = combineReducers({
    isPlaying: isPlayingReducer,
    queue: queueReducer
});

export default uiReducer;