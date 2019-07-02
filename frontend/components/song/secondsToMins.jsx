import React from 'react'

const secsToMins = ({totalSeconds}) => {
    console.log(totalSeconds)
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds - minutes * 60;
    if (seconds < 10){
        seconds = `0${seconds}`
    } else {
        seconds = seconds.toString();
    }
    minutes = minutes.toString();

    return (
        <span>
            {`${minutes}:${seconds}`}
        </span>
    )
}

export default secsToMins;