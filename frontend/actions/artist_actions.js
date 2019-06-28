import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

export const receiveAllArtists = (artists) => {
    return {
        type: RECEIVE_ALL_ARTISTS,
        artists
    }
}

export const receiveArtist = (payload) => {
    return {
        type: RECEIVE_ARTIST,
        payload
    }
}

export const fetchArtists = () => (dispatch) => {
    return ArtistApiUtil.fetchArtists()
        .then(artists => dispatch(receiveAllArtists(artists)))
}

export const fetchArtist = (id) => (dispatch) => {
    return ArtistApiUtil.fetchArtist(id)
        .then(payload => dispatch(receiveArtist(payload)))
}

