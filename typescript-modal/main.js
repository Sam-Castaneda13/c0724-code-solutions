'use strict';
const $modal = document.querySelector('dialog');
if (!$modal) throw new Error('It could not load dialog method');
const $open = document.querySelector('.open-modal');
if (!$open) throw new Error('The open button could not load');
const $dismiss = document.querySelector('.dismiss-modal');
if (!$dismiss) throw new Error('It could not load the dismiss button');
$open.addEventListener('click', function () {
  $modal.showModal();
});
$dismiss.addEventListener('click', function () {
  $modal.close();
});
