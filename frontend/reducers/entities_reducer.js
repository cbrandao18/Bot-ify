import { combineReducers } from "redux";
import users from "./users_reducer"
import playlists from './playlists_reducer';

const entitiesReducer = combineReducers({
  users,
  playlists
})

export default entitiesReducer;