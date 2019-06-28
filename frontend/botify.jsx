import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';
import { fetchArtists, fetchArtist } from './util/artist_api_util'
import { fetchAlbums, fetchAlbum } from './util/album_api_util'
import { fetchSongs, fetchSong } from './util/song_api_util'


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch; 

    window.fetchArtists = fetchArtists
    window.fetchArtist = fetchArtist
    window.fetchAlbums = fetchAlbums
    window.fetchAlbum = fetchAlbum
    window.fetchSongs = fetchSongs
    window.fetchSong = fetchSong

    ReactDOM.render(<Root store={store} />, root);
});