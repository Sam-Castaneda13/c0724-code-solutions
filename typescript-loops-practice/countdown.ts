/* exported countdown */
function countdown(num: number): number[] {
  const countdown = [];
  for (let i = num; i > -1; i--) {
    countdown.push(i);
  }
  return countdown;
}
