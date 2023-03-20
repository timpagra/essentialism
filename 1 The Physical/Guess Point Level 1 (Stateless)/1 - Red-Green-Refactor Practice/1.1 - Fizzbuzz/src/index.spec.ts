import { FizzBuzz } from '.';
describe('fizzbuzz', () => {
  it('should be defined', () => {
    let fizzbuzz = new FizzBuzz();
    expect(fizzbuzz).toBeDefined();
  });

  it('should return a string', () => {
    let fizzbuzz = new FizzBuzz();
    expect(typeof fizzbuzz.toFizzBuzz(1)).toBe('string');
  });

  it('should not accept a number less than 1', () => {
    let fizzbuzz = new FizzBuzz();

    expect(() => fizzbuzz.toFizzBuzz(0)).toThrow();
  });

  it('should not accept a number greater than 100', () => {
    let fizzbuzz = new FizzBuzz();

    expect(() => fizzbuzz.toFizzBuzz(101)).toThrow();
  });

  it('should return multiples of 3 as Fizz', () => {
    let fizzbuzz = new FizzBuzz();

    const testCases = [
      3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57, 63, 66, 69,
      72, 78, 81, 84, 87, 93, 96, 99,
    ];

    testCases.forEach((testCase) => {
      expect(fizzbuzz.toFizzBuzz(testCase)).toBe('Fizz');
    });
  });

  it('should return multiples of 5 as Buzz', () => {
    let fizzbuzz = new FizzBuzz();

    const testCases = [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100];

    testCases.forEach((testCase) => {
      expect(fizzbuzz.toFizzBuzz(testCase)).toBe('Buzz');
    });
  });
});
