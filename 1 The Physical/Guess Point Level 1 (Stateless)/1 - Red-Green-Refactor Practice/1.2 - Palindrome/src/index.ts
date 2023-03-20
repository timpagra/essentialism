export class PalindromeChecker {
  isPalindrome(word: string): boolean {
    return (
      word.toLocaleLowerCase() ===
      word.split('').reverse().join('').toLocaleLowerCase()
    );
  }
}
