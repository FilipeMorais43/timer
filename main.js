let timer;
let sec = 0;
let min = 0;
let hour = 0;

let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');
let pauseButton = document.getElementById('pause');
let timerElement = document.getElementById('timer');

startButton.addEventListener('click', function () {
  timer = setInterval(TimerHandler, 1000);
  resetButton.disabled = true;
  startButton.disabled = true;
});

pauseButton.addEventListener('click', function () {
  timer = clearInterval(timer);
  resetButton.disabled = false;
  startButton.disabled = false;
});

resetButton.addEventListener('click', function () {
  timer = clearInterval(timer);
  resetButton.disabled = true;
  sec = 0;
  min = 0;
  hour = 0;
  timerElement.innerHTML = ' 00 : 00 : 00';
});

function TimerHandler() {
  sec++;

  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min == 0;
    hour++;
  }

  DisplayTime();
}

function DisplayTime() {
  let newSec = sec;
  let newMin = min;
  let newHour = hour;

  if (sec < 10) {
    newSec = '0' + sec;
  }
  if (min < 10) {
    newMin = '0' + min;
  }
  if (hour < 10) {
    newHour = '0' + hour;
  }

  timerElement.innerHTML = newHour + ' : ' + newMin + ' : ' + newSec;
}
