export const IS_PLAYING = 'IS_PLAYING'
export const RECEIVE_SONG_QUEUE = 'RECEIVE_SONG_QUEUE'
export const START_PLAYING = 'START_PLAYING'
export const STOP_PLAYING = 'STOP_PLAYING'
export const SONG_ENDED = 'SONG_ENDED'

export const isPlaying = () => {
    return{
        type: IS_PLAYING
    }
}

export const setSongQueue = (queue, queueHead) => {
    return {
        type: RECEIVE_SONG_QUEUE,
        queue,
        queueHead
    }
}

export const songEnded = () => {
    return {
        type: SONG_ENDED
    }
}

export const startPlaying = () => {
    return {
        type: START_PLAYING
    }
}


export const stopPlaying = () => {
    return {
        type: STOP_PLAYING
    }
}

