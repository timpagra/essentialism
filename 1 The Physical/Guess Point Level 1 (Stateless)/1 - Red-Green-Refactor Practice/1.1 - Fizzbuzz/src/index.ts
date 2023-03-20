export class FizzBuzz {
  toFizzBuzz(n: number): string {
    if (n < 1) {
      throw new Error('Number must be greater than 1');
    }
    return n.toString();
  }
}
