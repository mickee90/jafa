// import { hashPassword } from '../../utils/passwords';
// const { hashPassword } = require('../../utils/passwords.ts');
import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const userTypes = [
  { type: 'ADMIN' },
  { type: 'STANDARD' },
  { type: 'PREMIUM' },
  { type: 'GUEST' },
];

export const users = async () => [
  {
    username: 'admin',
    email: 'admin@example.com',
    name: 'Admin',
    password: await hashPassword('admin'),
    sex: 'Other',
    birthDate: new Date('1990-01-01'),
    userType: 'ADMIN',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    username: 'user1',
    email: 'user1@example.com',
    name: 'User 1',
    password: await hashPassword('user1'),
    sex: 'Male',
    birthDate: new Date('1995-05-15'),
    userType: 'STANDARD',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// module.exports = {
//   users,
//   userTypes,
// };
