'use strict';
/* exported lastChars */
function lastChars(length, string) {
  let lastChars = '';
  if (length < string.length) {
    for (let i = string.length - length; i < string.length; i++) {
      lastChars += string[i];
    }
  } else if (length > string.length) {
    for (let i = 0; i < string.length; i++) {
      if (string[i]) lastChars += string[i];
    }
  }
  return lastChars;
}
