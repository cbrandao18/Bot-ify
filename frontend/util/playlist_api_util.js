export const fetchPlaylists = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/playlists'
    })
}

export const fetchPlaylist = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/playlists/${id}`
    })
}

export const createPlaylist = (playlist) => {
    return $.ajax({
        method: 'POST',
        url: '/api/playlists',
        data: {playlist}
    })
}

export const removePlaylist = (playlistId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/playlists/${playlistId}`,
        data: playlistId
    })
}

export const addSongToPlaylist = (payload) => {
    return $.ajax({
        url: '/api/playlist_songs',
        method: 'POST',
        data: {playlist_song: payload}
    })
}

export const removeSongFromPlaylist = (id) => {
    return $.ajax({
        url: `/api/playlist_songs/${id}`,
        method: 'DELETE'
    })
}