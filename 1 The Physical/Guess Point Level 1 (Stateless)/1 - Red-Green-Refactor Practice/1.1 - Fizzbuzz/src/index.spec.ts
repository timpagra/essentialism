import { FizzBuzz } from '.';
describe('fizzbuzz', () => {
  let fizzbuzz: FizzBuzz;

  beforeEach(() => {
    fizzbuzz = new FizzBuzz();
  });

  it('should be defined', () => {
    expect(fizzbuzz).toBeDefined();
  });

  it('should return a string', () => {
    expect(typeof fizzbuzz.toFizzBuzz(1)).toBe('string');
  });

  it('should not accept a number less than 1', () => {
    expect(() => fizzbuzz.toFizzBuzz(0)).toThrow();
  });

  it('should not accept a number greater than 100', () => {
    expect(() => fizzbuzz.toFizzBuzz(101)).toThrow();
  });

  it('should return multiples of 3 as Fizz', () => {
    [3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57, 63].forEach(
      (testCase) => {
        expect(fizzbuzz.toFizzBuzz(testCase)).toBe('Fizz');
      }
    );
  });

  it('should return multiples of 5 as Buzz', () => {
    [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100].forEach(
      (testCase) => {
        expect(fizzbuzz.toFizzBuzz(testCase)).toBe('Buzz');
      }
    );
  });

  it('should return multiples of 3 and 5 as FizzBuzz', () => {
    [15, 30, 45, 60, 75, 90].forEach((testCase) => {
      expect(fizzbuzz.toFizzBuzz(testCase)).toBe('FizzBuzz');
    });
  });
});
