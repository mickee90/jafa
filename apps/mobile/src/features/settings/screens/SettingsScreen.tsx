import { ButtonComponent } from '@jafa/jafa-ui';
import { useAppDispatch } from '../../../store/store';
import { authActions } from '../../auth/ducks/authSlice';

export const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(authActions.logout());
  };

  return <ButtonComponent label="Logout" onPress={onLogout} />;
};
