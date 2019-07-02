import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';
import { fetchArtists, fetchArtist } from './actions/artist_actions'
import { fetchAlbums, fetchAlbum } from './actions/album_actions'
import { fetchSongs, fetchSong } from './actions/song_actions'
import { isPlaying } from './actions/now_playing_actions'


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id },
            ui: {
                isPlaying: false,
                queue: []
            }
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

    window.isPlaying = isPlaying;

    ReactDOM.render(<Root store={store} />, root);
});