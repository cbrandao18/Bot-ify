import React from 'react';
import { Route } from 'react-router-dom'
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from '../components/splash/splash';
import NavBarContainer from '../components/nav_bar/nav_bar_container';
import LibraryContainer from '../components/library/library_container';
import CreatePlaylistModalContainer from '../components/playlist/create_playlist_modal_container';
import PlaylistDetailContainer from '../components/playlist/playlist_detail_container';

const App = () => (
    <div>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/" component={Splash} />

        <ProtectedRoute path="/browse" component={NavBarContainer} />
        <ProtectedRoute path="/browse/library" component={LibraryContainer} />
        <ProtectedRoute path="/browse/library/playlist/create" component={CreatePlaylistModalContainer} />
        <ProtectedRoute path="/playlists/:playlistId" component={PlaylistDetailContainer} />
    
    </div>
);

export default App;