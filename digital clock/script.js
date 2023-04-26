'use strict';

const time = document.querySelector('#time');

////////////////////////////////////////////////////////////////////Clock//

const calcTime = function () {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let postFix = hours > 0 && hours < 12 ? 'AM' : 'PM';

  seconds = seconds <= 9 ? '0' + seconds : seconds;
  minutes = minutes <= 9 ? '0' + minutes : minutes;
  hours = hours <= 9 ? '0' + hours : hours;

  let clock = `${hours}:${minutes}:${seconds} ${postFix}`;
  time.textContent = clock;
};

let interval = setInterval(calcTime, 1000);
