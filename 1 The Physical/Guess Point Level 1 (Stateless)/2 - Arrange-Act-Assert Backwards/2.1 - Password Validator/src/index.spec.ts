import { PasswordValidator } from './index';
describe('password validator', () => {
  let passwordValidator: PasswordValidator;

  beforeEach(() => {
    passwordValidator = new PasswordValidator();
  });

  it('should be defined', () => {
    expect(passwordValidator).toBeDefined();
  });

  it('should validate password contains at least one digit', () => {
    expect(passwordValidator.validate('abcd3')).toBeTruthy();
  });

  it('should contain at least 5 characters', () => {
    expect(passwordValidator.validate('ab')).toBeFalsy();
  });

  it('should contain at most 15 characters', () => {
    expect(
      passwordValidator.validate(
        'abchhedjnslderkjhslkdfhjlksdfjhafdjkh;dsfaehkasjaksbfad3'
      )
    ).toBeFalsy();
  });
});
