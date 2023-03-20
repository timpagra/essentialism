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
});
