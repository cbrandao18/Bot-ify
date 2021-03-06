import { combineReducers } from "redux";
import users from "./users_reducer"
import playlists from './playlists_reducer';
import artists from './artists_reducer';
import albums from './albums_reducer';
import songs from './songs_reducer';

const entitiesReducer = combineReducers({
  users,
  playlists,
  artists,
  albums,
  songs
})

export default entitiesReducer;