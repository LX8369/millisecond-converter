exports.secsMinsHours = (duration) => {
    var milliseconds = Math.floor((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

exports.secsMinsHoursDays = (duration) => {
    var milliseconds = Math.floor((duration % 1000) / 100)
    const days = Math.floor(duration / (24 * 60 * 60 * 1000));
    const daysms = duration % (24 * 60 * 60 * 1000);
    const hours = Math.floor(daysms / (60 * 60 * 1000));
    const hoursms = duration % (60 * 60 * 1000);
    const minutes = Math.floor(hoursms / (60 * 1000));
    const minutesms = duration % (60 * 1000);
    const sec = Math.floor(minutesms / 1000);
    return days + ":" + hours + ":" + minutes + ":" + sec + "." + milliseconds
}