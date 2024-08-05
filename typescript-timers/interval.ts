const $timer = document.querySelector('.countdown-display');
if (!$timer)
  throw new Error('The class countdown-display did not load correctly');

let count = 4;
const intervalId = setInterval(function () {
  count--;
  const countDown = count.toString();

  if (count < 1) {
    $timer.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  } else {
    $timer.textContent = countDown;
  }
}, 2000);
