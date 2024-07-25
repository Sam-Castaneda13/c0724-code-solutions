'use strict';
const $TabContainer = document.querySelector('.tab-container');
const $AllTab = document.querySelectorAll('.tab');
const $AllView = document.querySelectorAll('.view');
if (!$TabContainer) throw new Error("Didn't work:(");
function handleClick(event) {
  const $eventTarget = event.target;
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
if ($TabContainer) $TabContainer.addEventListener('click', handleClick);
