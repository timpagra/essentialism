export class StatisticsCalculator {
  calculateAverage(numbers: number[]): number {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    return sum / numbers.length;
  }

  calculateMinimum(numbers: number[]): number {
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }

    return min;
  }
}
