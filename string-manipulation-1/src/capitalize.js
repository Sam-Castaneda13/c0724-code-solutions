'use strict';
/* exported capitalize */
function capitalize(word) {
  const lowerFirst = word[0];
  const capFirst = lowerFirst.toUpperCase();
  const back = word.substring(1);
  const lowerBack = back.toLowerCase();
  return capFirst + lowerBack;
}
