import { StatisticsCalculator } from './index';
describe('stats calculator', () => {
  let statsCalculator: StatisticsCalculator;

  beforeEach(() => {
    statsCalculator = new StatisticsCalculator();
  });

  it('should calculate average value in integer seq', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = statsCalculator.calculateAverage(numbers);
    expect(result).toEqual(3);
  });

  it('should calculate minimum value in integer seq', () => {
    const numbers = [1, 2, 3, 4, 5, 0, -1];
    const result = statsCalculator.calculateMinimum(numbers);
    expect(result).toEqual(-1);
  });

  it('should calculate maximum value in integer seq', () => {
    const numbers = [1, 2, 3, 4, 5, 0, -1];
    const result = statsCalculator.calculateMaximum(numbers);
    expect(result).toEqual(5);
  });

  it('should calculate the number of elements in the sequence', () => {
    const numbers = [1, 2, 3, 4, 5, 0, -1];
    const result = statsCalculator.calculateCount(numbers);
    expect(result).toEqual(7);

    const emptyNumbers: number[] = [];
    const emptyResult = statsCalculator.calculateCount(emptyNumbers);
    expect(emptyResult).toEqual(0);
  });
});
