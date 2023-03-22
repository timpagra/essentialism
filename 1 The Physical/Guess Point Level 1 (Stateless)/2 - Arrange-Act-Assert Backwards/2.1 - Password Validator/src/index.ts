export class PasswordValidator {
  validate(password: string) {
    return this.validatePresenceOfDigit(password);
  }

  validatePresenceOfDigit(password: string): boolean {
    return /\d/.test(password);
  }
}
