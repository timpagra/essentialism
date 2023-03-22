export class PasswordValidator {
  validate(password: string) {
    if (!this.validatePresenceOfDigit(password)) {
      return false;
    }

    if (!this.validateLength(password)) {
      return false;
    }

    return true;
  }

  validatePresenceOfDigit(password: string): boolean {
    return /\d/.test(password);
  }

  validateLength(password: string): boolean {
    return password.length >= 5 && password.length <= 15;
  }
}
