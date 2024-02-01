const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const centiSeconds = document.querySelector('#centi');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
let min = 0, sec = 0, centiSec = 0;
let intervalId

const updateTime = function () {
    minutes.innerHTML = min.toString().padStart(2, '0');
    seconds.innerHTML = sec.toString().padStart(2, '0');
    centiSeconds.innerHTML = centiSec.toString().padStart(2, '0');
    centiSec++
    if (centiSec == 100) {
        centiSec = 0
        sec++
    }
    if (sec == 60) {
        sec = 0
        min++
    }
}

const changeTime = function () {
    if (!intervalId) {
        intervalId = setInterval(updateTime, 10)
    }
}

const stopTime = function () {
    clearInterval(intervalId)
    intervalId = null
}

const resetTime = function () {
    stopTime()
    min = 0, sec = 0, centiSec = 0;
    minutes.innerHTML = min.toString().padStart(2, '0');
    seconds.innerHTML = sec.toString().padStart(2, '0');
    centiSeconds.innerHTML = centiSec.toString().padStart(2, '0');
}

startBtn.addEventListener('click', changeTime);
stopBtn.addEventListener('click', stopTime);
resetBtn.addEventListener('click', resetTime)