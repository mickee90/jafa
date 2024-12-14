import { LocalStorage } from '../../../utils/storage';

export const useLogout = () => {
  const logout = async () => {
    LocalStorage.remove('loginToken');
  };

  return { logout };
};
