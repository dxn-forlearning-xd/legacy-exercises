let startTime;
let updatedTime;
let difference;
let running = false;
let lapCounter = 1;
let timerInterval;

const timeDisplay = document.getElementById('timeDisplay');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');
const lapButton = document.getElementById('lapButton');
const lapList = document.getElementById('lapList');


startStopButton.addEventListener('click', function () {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateTime, 1);
        startStopButton.textContent = 'Stop';
    } else {
        clearInterval(timerInterval);
        startStopButton.textContent = 'Start';
    }
    running = !running;
});


resetButton.addEventListener('click', function () {
    clearInterval(timerInterval);
    running = false;
    difference = 0;
    timeDisplay.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    lapList.innerHTML = ''; 
    lapCounter = 1;
});


lapButton.addEventListener('click', function () {
    if (running) {
        const lapTime = formatTime(difference);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter++}: ${lapTime}`;
        lapList.appendChild(lapItem);
    }
});


function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    timeDisplay.textContent = formatTime(difference);
}


function formatTime(ms) {
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let seconds = Math.floor((ms / 1000) % 60);
    let milliseconds = ms % 1000;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 100) ? "0" + milliseconds : milliseconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}
