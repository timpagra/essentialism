export class PasswordValidator {
  validate(password: string) {
    if (!this.validatePresenceOfDigit(password)) {
      return false;
    }

    if (!this.validateLength(password)) {
      return false;
    }

    if (!this.validatePresenceOfUppercase(password)) {
      return false;
    }

    return true;
  }

  validatePresenceOfDigit(password: string): boolean {
    return password.split('').some((char) => !isNaN(parseInt(char, 10)));
  }

  validateLength(password: string): boolean {
    return password.length >= 5 && password.length <= 15;
  }

  validatePresenceOfUppercase(password: string): boolean {
    return /[A-Z]/.test(password);
  }
}
