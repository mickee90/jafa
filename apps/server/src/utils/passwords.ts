import bcrypt from 'bcrypt';

// Comment out criteria to keep simple during development
export const validatePassword = (password: string): string[] => {
  const errors: string[] = [];

  // Minimum length
  const minLength = 4;
  if (password.length < minLength) {
    errors.push(`Password must be at least ${minLength} characters long.`);
  }

  // Maximum length
  // const maxLength = 64;
  // if (password.length > maxLength) {
  //   errors.push(`Password must not exceed ${maxLength} characters.`);
  // }

  // // Complexity checks
  // const hasUpperCase = /[A-Z]/.test(password);
  // const hasLowerCase = /[a-z]/.test(password);
  // const hasNumbers = /\d/.test(password);
  // const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // if (!hasUpperCase) {
  //   errors.push('Password must contain at least one uppercase letter.');
  // }
  // if (!hasLowerCase) {
  //   errors.push('Password must contain at least one lowercase letter.');
  // }
  // if (!hasNumbers) {
  //   errors.push('Password must contain at least one number.');
  // }
  // if (!hasSpecialChars) {
  //   errors.push('Password must contain at least one special character.');
  // }

  // // Avoid common patterns
  // const commonPasswords = [
  //   '123456',
  //   'password',
  //   '123456789',
  //   '12345678',
  //   '12345',
  //   '1234567',
  //   'qwerty',
  //   'abc123',
  //   'letmein',
  //   'monkey',
  // ];
  // if (commonPasswords.includes(password)) {
  //   errors.push(
  //     'Password is too common. Please choose a different password.'
  //   );
  // }

  return errors;
};

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};
