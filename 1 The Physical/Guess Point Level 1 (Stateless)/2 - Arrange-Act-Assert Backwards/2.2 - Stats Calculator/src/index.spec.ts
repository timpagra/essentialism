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
});

// should accept an array of numbers
// should return minimum value in the array
// should return maximum value in the array
// should return average value in the array
