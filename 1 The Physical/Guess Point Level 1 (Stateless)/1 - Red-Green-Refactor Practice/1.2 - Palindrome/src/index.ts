export class PalindromeChecker {
  isPalindrome(word: string): boolean {
    return word === word.split('').reverse().join('');
  }
}
