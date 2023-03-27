export enum ErrorMessages {
  PRESENCE_OF_DIGIT = 'Password must contain at least one digit',
  LENGTH = 'Password must be between 5 and 15 characters',
  PRESENCE_OF_UPPERCASE = 'Password must contain at least one uppercase letter',
}

type ValidationResult = {
  result: boolean;
  errors: ErrorMessages[];
};

export class PasswordValidator {
  validate(password: string): ValidationResult {
    if (!this.validatePresenceOfDigit(password)) {
      return {
        result: false,
        errors: [ErrorMessages.PRESENCE_OF_DIGIT],
      };
    }

    if (!this.validateLength(password)) {
      return {
        result: false,
        errors: [ErrorMessages.LENGTH],
      };
    }

    if (!this.validatePresenceOfUppercase(password)) {
      return {
        result: false,
        errors: [ErrorMessages.PRESENCE_OF_UPPERCASE],
      };
    }

    return {
      result: true,
      errors: [],
    };
  }

  validatePresenceOfDigit(password: string): boolean {
    return password.split('').some((char) => !isNaN(parseInt(char, 10)));
  }

  validateLength(password: string): boolean {
    return password.length >= 5 && password.length <= 15;
  }

  validatePresenceOfUppercase(password: string): boolean {
    const lowercasePassword = password.toLowerCase();
    for (let i = 0; i < password.length; i++) {
      if (password[i] !== lowercasePassword[i]) {
        return true;
      }
    }
    return false;
  }
}
