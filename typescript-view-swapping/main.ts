const $TabContainer = document.querySelector('.tab-container');
const $AllTab = document.querySelectorAll('.tab');
const $AllView = document.querySelectorAll('.view');

if (!$TabContainer) throw new Error('The $TabContainer query did not work.');

function handleClick(event: Event): void {
  const $eventTarget = event.target as HTMLDivElement;

  if (!$eventTarget) {
    throw new Error('The $eventTarget is not selecting a tab');
  }

  for (let i = 0; i < $AllTab.length; i++) {
    if ($eventTarget.textContent === $AllTab[i].textContent) {
      $AllTab[i].className = 'tab active';
    } else {
      $AllTab[i].className = 'tab';
    }
  }

  const dataView = $eventTarget.getAttribute('data-view');

  for (let i = 0; i < $AllTab.length; i++) {
    if (dataView !== $AllView[i].getAttribute('data-view')) {
      $AllView[i].className = 'view hidden';
    } else {
      $AllView[i].className = 'view';
    }
  }
}

$TabContainer.addEventListener('click', handleClick);
