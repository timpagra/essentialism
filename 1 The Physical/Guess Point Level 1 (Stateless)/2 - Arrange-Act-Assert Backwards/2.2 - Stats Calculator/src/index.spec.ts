import { StatisticsCalculator } from './index';
describe('stats calculator', () => {
  let statsCalculator: StatisticsCalculator;

  beforeEach(() => {
    statsCalculator = new StatisticsCalculator();
  });

  it('should calculate minimum value in integer seq', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = statsCalculator.calculateAverage(numbers);
    expect(result).toEqual(3);
  });
});
