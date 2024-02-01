# Stopwatch

## index.html
<ul>
  <li>First created a basic StopWatch template with a display area consists Minutes, Seconds and Centiseconds. And added 3 buttons - Start, Stop and Reset</li>
  <li>Then added CSS with "media queries" to make it responsive within the HTML file (index.html)</li>
</ul>

## script.js
<ul>
  <li>
    First, assigned variables to references to HTML elements based on their IDs. And initialized some values
    ```javascript
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    const centiSeconds = document.querySelector('#centi');
    const startBtn = document.querySelector('#start');
    const stopBtn = document.querySelector('#stop');
    const resetBtn = document.querySelector('#reset');
    let min = 0, sec = 0, centiSec = 0;
    ```
  </li>
  <li>
    Second, declared a variable intervalId for initializing a unique id for "setInterval" function
    ```javascript
    let intervalId
    ```
  </li>
  <li> The Actual function which updates the time and shows on the display area of the web page
    ```javascript
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
    ```
  </li>
  <li>
        This code checks whether the variable intervalId is falsy (e.g., null or undefined). If intervalId is falsy, it means that there is no active interval running. In such a case, the code sets up a new interval using setInterval and assigns its ID to the intervalId variable. The interval is set to execute the updateTime function every 10 milliseconds.
    
    ```javascript
    const changeTime = function () {
        if (!intervalId) {
            intervalId = setInterval(updateTime, 10)
        }
    }
    ```
  </li>
</ul>
