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

  it('should ignore spaces in palindromic phrases', () => {
    [
      'Was it a car or a cat I saw?',
      'Step on no pets',
      'Top spot',
      'No lemon, no melon',
    ].forEach((phrase) => {
      expect(checker.isPalindrome(phrase)).toBeTruthy();
    });
  });
});
