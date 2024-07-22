const $hotButton = document.querySelector('.hot-button.cold');
const $clickCount = document.querySelector('.click-count');
let counter = 0;
if (!$hotButton) throw new Error('The $hotButton query failed');

function handleClick(): void {
  counter++;
  console.log(counter);
  if ($clickCount) $clickCount.textContent = 'Clicks: ' + counter;

  if (counter > 3 && counter < 7) {
    if ($hotButton) $hotButton.className = 'hot-button cool';
  } else if (counter > 6 && counter < 10) {
    if ($hotButton) $hotButton.className = 'hot-button tepid';
  } else if (counter > 9 && counter < 13) {
    if ($hotButton) $hotButton.className = 'hot-button warm';
  } else if (counter > 12 && counter < 16) {
    if ($hotButton) $hotButton.className = 'hot-button hot';
  } else if (counter > 15) {
    if ($hotButton) $hotButton.className = 'hot-button nuclear';
  }

  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
}

$hotButton.addEventListener('click', handleClick);
