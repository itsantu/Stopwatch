# StopWatch - JavaScript Project

## index.html
Added a display section which shows the time count and 3 buttons (Start, Stop and Reset) to index.html file. Then added CSS to it.
<br>

## script.js
First assign variables with references of HTML IDs. <br>

The updateTime stores the function which calculates the time and reflects it to the display area.
```javascript
const updateTime = function(){
    minutes.innerHTML = min.toString().padStart(2, '0');
    seconds.innerHTML = sec.toString().padStart(2, '0');
    centiSeconds.innerHTML = centiSec.toString().padStart(2, '0');
    centiSec++
    if (centiSec == 100){
        centiSec = 0
        sec++
    }
    if (sec == 60){
        sec = 0
        min++
    }
}
```
Then "changeTime" checks whether the variable intervalId is falsy (e.g., null or undefined). If intervalId is falsy, it means that there is no active interval running. In such a case, the code sets up a new interval using setInterval and assigns its ID to the intervalId variable. The interval is set to execute the updateTime function every 10 milliseconds.

```javascript
const changeTime = function(){
    if(!intervalId){
        intervalId = setInterval(updateTime, 10)
    }
}
```

The stopTime handles the stop event. It assigns the value of currently running intervalId to "null" for memory management purpose.
```javascript
const stopTime = function(){
    clearInterval(intervalId)
    intervalId = null
}
```

The rest part is easy to understand
```javascript
const resetTime = function(){
    stopTime()
    min = 0, sec = 0, centiSec = 0;
    minutes.innerHTML = min.toString().padStart(2, '0');
    seconds.innerHTML = sec.toString().padStart(2, '0');
    centiSeconds.innerHTML = centiSec.toString().padStart(2, '0');
}

startBtn.addEventListener('click', changeTime);
stopBtn.addEventListener('click', stopTime);
resetBtn.addEventListener('click', resetTime)
```
