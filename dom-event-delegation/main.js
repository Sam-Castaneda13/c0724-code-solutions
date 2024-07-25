'use strict';
const $task = document.querySelector('.task-list');
if (!$task) throw new Error('.task-list down not exist');
function handleClick(event) {
  const eventTarget = event.target;
  if (eventTarget instanceof HTMLButtonElement) {
    const checker = eventTarget.closest('.task-list-item');
    console.log(checker);
    if (checker) checker.remove();
  }
}
$task.addEventListener('click', handleClick);
