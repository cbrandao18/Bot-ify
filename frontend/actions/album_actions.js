import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

export const receiveAllAlbums = (albums) => {
    return {
        type: RECEIVE_ALL_ALBUMS,
        albums
    }
}

export const receiveAlbum = (payload) => {
    return {
        type: RECEIVE_ALBUM,
        payload
    }
}

export const fetchAlbums = () => (dispatch) => {
    return AlbumApiUtil.fetchAlbums()
        .then(albums => dispatch(receiveAllAlbums(albums)))
}

export const fetchAlbum = (id) => (dispatch) => {
    return AlbumApiUtil.fetchAlbum(id)
        .then(payload => dispatch(receiveAlbum(payload)))
}
