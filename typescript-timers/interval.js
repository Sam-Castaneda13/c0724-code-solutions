'use strict';
const $timer = document.querySelector('.countdown-display');
if (!$timer)
  throw new Error('The class countdown-display did not load correctly');
let count = 4;
const intervalId = setInterval(function () {
  count--;
  switch (count) {
    case 3:
      $timer.textContent = '3';
      break;
    case 2:
      $timer.textContent = '2';
      break;
    case 1:
      $timer.textContent = '1';
      break;
    case 0:
      $timer.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(intervalId);
  }
}, 2000);
