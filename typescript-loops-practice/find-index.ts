/* exported findIndex */
function findIndex(array: number[], value: number): number {
  let answer = -1;
  for (let i = 0; i < array.length; i++) {
    answer++;
    if (array[i] === value) {
      return answer;
    }
  }
  return -1;
}
