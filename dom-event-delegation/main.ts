const $task = document.querySelector('.task-list');

if (!$task) throw new Error('.task-list down not exist');

function handleClick(event: Event): void {
  const eventTarget = event.target as HTMLElement;

  if (eventTarget instanceof HTMLButtonElement) {
    const checker = eventTarget.closest('.task-list-item');
    console.log(checker);
    if (checker) checker.remove();
  }
}

$task.addEventListener('click', handleClick);
