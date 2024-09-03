let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    if (timer) {
        milliseconds++;

        if (milliseconds == 100) {
            seconds++;
            milliseconds = 0;
        }

        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes == 60) {
            hours++;
            seconds = 0;
            minutes = 0;
        }

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : "0" + minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

        displayTime.innerHTML = h + ":" + m + ":" + s + ":" + ms;
    }
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }

    timer = setInterval(stopwatch, 10);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime.innerHTML = "00:00:00:00";
}
