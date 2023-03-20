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
});
