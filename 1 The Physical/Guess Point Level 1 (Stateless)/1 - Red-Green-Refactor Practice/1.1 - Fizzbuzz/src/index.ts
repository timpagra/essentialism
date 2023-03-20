export class FizzBuzz {
  toFizzBuzz(n: number): string {
    if (n < 1) {
      throw new Error('Number must be greater than 1');
    }

    if (n > 100) {
      throw new Error('Number must be less than 100');
    }

    return n.toString();
  }
}
