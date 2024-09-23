import { divideBy, evenNumbers, multiplyBy, toDollars } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 9, 22];
    const results = evenNumbers(numbers);
    expect(results).toEqual([4, 22]);
  });
});

describe('toDollars', () => {
  it('returns number formatted as dollars', () => {
    const money = 100;
    const results = toDollars(money);
    expect(results).toEqual('$100.00');
  });
});

describe('divideBy', () => {
  it('returns the divided numbers', () => {
    const numbers = [25, 45, 64, 100, 235];
    const divisor = 5;
    const results = divideBy(numbers, divisor);
    expect(results).toEqual([5, 9, 12.8, 20, 47]);
  });
});

describe('multiplyBy', () => {
  it('returns the multiplied numbers', () => {
    const numbers = {
      one: 20,
      two: 40,
      three: '60',
      four: 80,
      five: 'one-hundred',
    };
    const multiplier = 5;
    const results = multiplyBy(numbers, multiplier);
    expect(results).toEqual({
      one: 100,
      two: 200,
      three: 300,
      four: 400,
      five: NaN,
    });
  });
});
