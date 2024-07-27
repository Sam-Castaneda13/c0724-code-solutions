/* exported ransomCase */
function ransomCase(string: string): string {
  const evenArray = [];
  const oddArray = [];
  const newArray = [];
  let newString: string = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      evenArray.push(string[i].toLowerCase());
    } else {
      oddArray.push(string[i].toUpperCase());
    }
  }

  for (let o = 0; o < string.length; o++) {
    if (evenArray[o]) newArray.push(evenArray[o]);
    if (oddArray[o]) newArray.push(oddArray[o]);
  }

  newString = newArray.toString();
  newString = newString.replaceAll(',', '');

  return newString.trim();
}
