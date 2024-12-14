import { ButtonComponent } from '@jafa/jafa-ui';
import { useAppDispatch } from '../../../store/store';
import { authActions } from '../../auth/ducks/authSlice';
import { useLogout } from '../../auth/hooks/useLogout';

export const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const { logout } = useLogout();

  const onLogout = () => {
    logout();
    dispatch(authActions.logout());
  };

  return <ButtonComponent label="Logout" onPress={onLogout} />;
};
