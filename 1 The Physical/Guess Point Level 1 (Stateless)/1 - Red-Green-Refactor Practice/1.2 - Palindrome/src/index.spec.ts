import { PalindromeChecker } from './index';

describe('Palindrome checker', () => {
  let checker: PalindromeChecker;

  beforeEach(() => {
    checker = new PalindromeChecker();
  });

  it('should be defined', () => {
    expect(checker).toBeDefined();
  });

  it('should return true for a palindrome words', () => {
    ['kayak', 'level', 'noon', 'radar'].forEach((word) => {
      expect(checker.isPalindrome(word)).toBeTruthy();
    });
  });

  it('should ignore casing in palindrome words', () => {
    ['Kayak', 'LeVel', 'NoOn', 'RaDar'].forEach((word) => {
      expect(checker.isPalindrome(word)).toBeTruthy();
    });
  });
});
