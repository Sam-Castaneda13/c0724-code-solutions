'use strict';
const $img1 = document.querySelector('#img-1');
if (!$img1) throw new Error('Could not load image 1');
const $img2 = document.querySelector('#img-2');
if (!$img2) throw new Error('Could not load image 2');
const $img3 = document.querySelector('#img-3');
if (!$img3) throw new Error('Could not load image 3');
const $img4 = document.querySelector('#img-4');
if (!$img4) throw new Error('Could not load image 4');
const $img5 = document.querySelector('#img-5');
if (!$img5) throw new Error('Could not load image 5');
const $dot1 = document.querySelector('#dot1');
if (!$dot1) throw new Error('Could not load dot 1');
const $dot2 = document.querySelector('#dot2');
if (!$dot2) throw new Error('Could not load dot 2');
const $dot3 = document.querySelector('#dot3');
if (!$dot3) throw new Error('Could not load dot 3');
const $dot4 = document.querySelector('#dot4');
if (!$dot4) throw new Error('Could not load dot 4');
const $dot5 = document.querySelector('#dot5');
if (!$dot5) throw new Error('Could not load dot 5');
const $right = document.querySelector('#right');
if (!$right) throw new Error("Couldn't load right arrow");
const $left = document.querySelector('#left');
if (!$left) throw new Error("Couldn't load left arrow");
const $dots = document.querySelectorAll('span');
if (!$dots) throw new Error("Couldn't load left arrow");
// what
let intervalId = setInterval(imgSwitch, 3000);
function startInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(imgSwitch, 3000);
}
function imgSwitch() {
  if (!$img1) throw new Error('Could not load image 1');
  if (!$img2) throw new Error('Could not load image 2');
  if (!$img3) throw new Error('Could not load image 3');
  if (!$img4) throw new Error('Could not load image 4');
  if (!$img5) throw new Error('Could not load image 5');
  if (!$dot1) throw new Error('Could not load dot 1');
  if (!$dot2) throw new Error('Could not load dot 2');
  if (!$dot3) throw new Error('Could not load dot 3');
  if (!$dot4) throw new Error('Could not load dot 4');
  if (!$dot5) throw new Error('Could not load dot 5');
  if ($img1.className === 'unhidden') {
    $img1.className = 'hidden';
    $img2.className = 'unhidden';
    $dot2.className = 'filled';
    $dot1.className = 'empty';
  } else if ($img2.className === 'unhidden') {
    $img2.className = 'hidden';
    $img3.className = 'unhidden';
    $dot3.className = 'filled';
    $dot2.className = 'empty';
  } else if ($img3.className === 'unhidden') {
    $img3.className = 'hidden';
    $img4.className = 'unhidden';
    $dot4.className = 'filled';
    $dot3.className = 'empty';
  } else if ($img4.className === 'unhidden') {
    $img4.className = 'hidden';
    $img5.className = 'unhidden';
    $dot5.className = 'filled';
    $dot4.className = 'empty';
  } else if ($img5.className === 'unhidden') {
    $img5.className = 'hidden';
    $img1.className = 'unhidden';
    $dot1.className = 'filled';
    $dot5.className = 'empty';
  }
}
function imgSwitchBack() {
  if (!$img1) throw new Error('Could not load image 1');
  if (!$img2) throw new Error('Could not load image 2');
  if (!$img3) throw new Error('Could not load image 3');
  if (!$img4) throw new Error('Could not load image 4');
  if (!$img5) throw new Error('Could not load image 5');
  if (!$dot1) throw new Error('Could not load dot 1');
  if (!$dot2) throw new Error('Could not load dot 2');
  if (!$dot3) throw new Error('Could not load dot 3');
  if (!$dot4) throw new Error('Could not load dot 4');
  if (!$dot5) throw new Error('Could not load dot 5');
  if ($img1.className === 'unhidden') {
    $img1.className = 'hidden';
    $img5.className = 'unhidden';
    $dot5.className = 'filled';
    $dot1.className = 'empty';
  } else if ($img2.className === 'unhidden') {
    $img2.className = 'hidden';
    $img1.className = 'unhidden';
    $dot1.className = 'filled';
    $dot2.className = 'empty';
  } else if ($img3.className === 'unhidden') {
    $img3.className = 'hidden';
    $img2.className = 'unhidden';
    $dot2.className = 'filled';
    $dot3.className = 'empty';
  } else if ($img4.className === 'unhidden') {
    $img4.className = 'hidden';
    $img3.className = 'unhidden';
    $dot3.className = 'filled';
    $dot4.className = 'empty';
  } else if ($img5.className === 'unhidden') {
    $img5.className = 'hidden';
    $img4.className = 'unhidden';
    $dot4.className = 'filled';
    $dot5.className = 'empty';
  }
}
$right.addEventListener('click', function () {
  imgSwitch();
  clearInterval(intervalId);
  startInterval();
});
$left.addEventListener('click', function () {
  imgSwitchBack();
  clearInterval(intervalId);
  startInterval();
});
$dot1.addEventListener('click', function () {
  $dot1.className = 'filled';
  $img1.className = 'unhidden';
  $dot2.className = 'empty';
  $img2.className = 'hidden';
  $dot3.className = 'empty';
  $img3.className = 'hidden';
  $dot4.className = 'empty';
  $img4.className = 'hidden';
  $dot5.className = 'empty';
  $img5.className = 'hidden';
  clearInterval(intervalId);
  startInterval();
});
$dot2.addEventListener('click', function () {
  $dot1.className = 'empty';
  $img1.className = 'hidden';
  $dot2.className = 'filled';
  $img2.className = 'unhidden';
  $dot3.className = 'empty';
  $img3.className = 'hidden';
  $dot4.className = 'empty';
  $img4.className = 'hidden';
  $dot5.className = 'empty';
  $img5.className = 'hidden';
  clearInterval(intervalId);
  startInterval();
});
$dot3.addEventListener('click', function () {
  $dot1.className = 'empty';
  $img1.className = 'hidden';
  $dot2.className = 'empty';
  $img2.className = 'hidden';
  $dot3.className = 'filled';
  $img3.className = 'unhidden';
  $dot4.className = 'empty';
  $img4.className = 'hidden';
  $dot5.className = 'empty';
  $img5.className = 'hidden';
  clearInterval(intervalId);
  startInterval();
});
$dot4.addEventListener('click', function () {
  $dot1.className = 'empty';
  $img1.className = 'hidden';
  $dot2.className = 'empty';
  $img2.className = 'hidden';
  $dot3.className = 'empty';
  $img3.className = 'hidden';
  $dot4.className = 'filled';
  $img4.className = 'unhidden';
  $dot5.className = 'empty';
  $img5.className = 'hidden';
  clearInterval(intervalId);
  startInterval();
});
$dot5.addEventListener('click', function () {
  $dot1.className = 'empty';
  $img1.className = 'hidden';
  $dot2.className = 'empty';
  $img2.className = 'hidden';
  $dot3.className = 'empty';
  $img3.className = 'hidden';
  $dot4.className = 'empty';
  $img4.className = 'hidden';
  $dot5.className = 'filled';
  $img5.className = 'unhidden';
  clearInterval(intervalId);
  startInterval();
});
