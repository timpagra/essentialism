export class PalindromeChecker {
  isPalindrome(word: string): boolean {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
    return cleanWord === cleanWord.split('').reverse().join('');
  }
}
