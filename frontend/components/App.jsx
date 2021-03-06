import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from '../components/splash/splash';
import NavBarContainer from '../components/nav_bar/nav_bar_container';
import LibraryContainer from '../components/library/library_container';
import CreatePlaylistModalContainer from '../components/playlist/create_playlist_modal_container';
import PlaylistDetailContainer from '../components/playlist/playlist_detail_container';
import ArtistIndexContainer from '../components/library/artists/artist_index_container';
import ArtistDetailContainer from './library/artists/artist_detail_container';
import AlbumIndexContainer from './library/albums/album_index_container';
import AlbumDetailContainer from './library/albums/album_detail_container';
import NowPlayingContainer from './now_playing/now_playing_container';
import SongIndexContainer from './library/songs/song_index_container';
import Home from './home/home'

const App = () => (
    <div>
        
        <ProtectedRoute path="/" component={NowPlayingContainer} />
        <ProtectedRoute path="/" component={NavBarContainer} />

        <Switch>
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/browse/featured" component={Home} />
            <ProtectedRoute path="/browse/library/playlists" component={LibraryContainer} />
            <ProtectedRoute path="/browse/library/artists" component={ArtistIndexContainer} />
            <ProtectedRoute path="/browse/library/albums" component={AlbumIndexContainer} />
            <ProtectedRoute path="/browse/library/songs" component={SongIndexContainer} />
            <ProtectedRoute path="/playlists/:playlistId" component={PlaylistDetailContainer} />
            <ProtectedRoute path="/artists/:artistId" component={ArtistDetailContainer} />
            <ProtectedRoute path="/albums/:albumId" component={AlbumDetailContainer} />
            <ProtectedRoute path="/browse/library/playlist/create" component={CreatePlaylistModalContainer} />
            <Redirect to='/browse/featured'></Redirect>
        </Switch>

    
    </div>
);

export default App;