export class StatisticsCalculator {
  calculateAverage(numbers: number[]): number {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    return Number((sum / numbers.length).toFixed(12));
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

  calculateMaximum(numbers: number[]): number {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }

    return max;
  }

  calculateCount(numbers: number[]): number {
    return numbers.length;
  }
}
