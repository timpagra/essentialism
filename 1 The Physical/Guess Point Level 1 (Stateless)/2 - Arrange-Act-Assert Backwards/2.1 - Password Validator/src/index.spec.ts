import { ErrorMessages, PasswordValidator } from './index';
describe('password validator', () => {
  let passwordValidator: PasswordValidator;

  beforeEach(() => {
    passwordValidator = new PasswordValidator();
  });

  it('should be defined', () => {
    expect(passwordValidator).toBeDefined();
  });

  it('should validate password contains at least one digit', () => {
    expect(passwordValidator.validate('Abcd3')).toBeTruthy();
  });

  it('should contain  at least 5 and at most 15 characters', () => {
    expect(
      passwordValidator.validate(
        'abchhedjnslderkjhslkdfhjlksdfjhafdjkh;dsfaehkasjaksbfad3'
      )
    ).toEqual({
      result: false,
      errors: [ErrorMessages.LENGTH],
    });

    expect(passwordValidator.validate('a54b')).toEqual({
      result: false,
      errors: [ErrorMessages.LENGTH],
    });
  });

  it('should contain at least one uppercase letter', () => {
    expect(passwordValidator.validate('abcd3')).toEqual({
      result: false,
      errors: [ErrorMessages.PRESENCE_OF_UPPERCASE],
    });

    expect(passwordValidator.validate('Abcd3')).toBeTruthy();
  });

  it('should return an object containing a boolean result and an errors key', () => {
    expect(passwordValidator.validate('Abcd3')).toEqual({
      result: true,
      errors: [],
    });
  });
});
