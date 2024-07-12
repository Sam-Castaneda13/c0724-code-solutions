'use strict';
/* exported getWords */
function getWords(string) {
  const newArray = [];
  if (string) {
    return string.split(' ');
  } else {
    return newArray;
  }
}
