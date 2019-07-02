export const IS_PLAYING = 'IS_PLAYING'
export const RECEIVE_SONG_QUEUE = 'RECEIVE_SONG_QUEUE'

export const isPlaying = () => {
    return{
        type: IS_PLAYING
    }
}

export const setSongQueue = (queue) => {
    return {
        type: RECEIVE_SONG_QUEUE,
        queue
    }
}
