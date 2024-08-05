'use strict';
const $text = document.querySelector('.message');
if (!$text) throw new Error('The message class could not load');
setTimeout(function () {
  $text.textContent = 'Hello World';
}, 5000);
