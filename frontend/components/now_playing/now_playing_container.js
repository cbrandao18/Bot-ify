import { connect } from 'react-redux';
import NowPlaying from './now_playing'
import { isPlaying, setSongQueue, songEnded } from '../../actions/now_playing_actions'
import { fetchSong } from '../../actions/song_actions'
import { fetchAlbum } from '../../actions/album_actions'
import { fetchArtist } from '../../actions/artist_actions'

const mapStateToProps = (state) => {
    let currentSong = {};
    let currentSongAlbum = {};
    let currentArtist = {};
    if (Object.keys(state.ui.queue).length !== 0){
        let currentSongId = state.ui.queue[state.ui.queueHead];
        currentSong = state.entities.songs[currentSongId];
        currentSongAlbum = state.entities.albums[currentSong.album_id]
        currentArtist = state.entities.artists[currentSongAlbum.artist_id]
    }
    return {
        isPlayingBool: state.ui.isPlaying,
        queue: state.ui.queue,
        currentSong: currentSong,
        currentAlbum: currentSongAlbum,
        currentArtist: currentArtist,
        queueHead: state.ui.queueHead
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isPlaying: () => dispatch(isPlaying()),
        setSongQueue: (queue) => dispatch(setSongQueue(queue)),
        fetchSong: (id) => dispatch(fetchSong(id)),
        fetchAlbum: (id) => dispatch(fetchAlbum(id)),
        fetchArtist: (id) => dispatch(fetchArtist(id)),
        songEnded: () => dispatch(songEnded())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);