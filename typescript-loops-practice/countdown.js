'use strict';
/* exported countdown */
function countdown(num) {
  const countdown = [];
  for (let i = num; i > -1; i--) {
    countdown.push(i);
  }
  return countdown;
}
