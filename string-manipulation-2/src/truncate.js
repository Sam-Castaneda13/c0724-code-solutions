'use strict';
/* exported truncate */
function truncate(length, string) {
  let newString = '';
  for (let i = 0; i < length; i++) {
    newString += string.charAt(i);
  }
  newString = newString.trim();
  return newString + '...';
}
