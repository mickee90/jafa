import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../mutations/loginUser';
import { User } from '../types';
import { LocalStorage } from '../../utils/storage';

export const useLogin = () => {
  const [loginUser, { loading, error }] = useMutation<
    { loginUser: { user: User; token: string } },
    { email: string; password: string }
  >(LOGIN_USER);

  const login = async (email: string, password: string) => {
    const { data } = await loginUser({ variables: { email, password } });

    if (data?.loginUser) {
      const { token } = data.loginUser;
      LocalStorage.set('loginToken', token);
    }

    return data?.loginUser.user;
  };

  return {
    login,
    loading,
    error,
  };
};
