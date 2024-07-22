'use strict';
const $singleClick = document.querySelector('.click-button');
if (!$singleClick) {
  throw new Error('$singleClick does not exist');
}
function handleClick(event) {
  console.log('Button Clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}
$singleClick.addEventListener('click', handleClick);
const $hoverMouse = document.querySelector('.hover-button');
if (!$hoverMouse) throw new Error('$hoverMouse does not existed');
function handleMouseover(event) {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}
$hoverMouse.addEventListener('mouseover', handleMouseover);
const $doubleClick = document.querySelector('.double-click-button');
if (!$doubleClick) throw new Error('$doubleClick does not exist');
function handleDoubleClick(event) {
  console.log('button doubled-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}
$doubleClick.addEventListener('dblclick', handleDoubleClick);
