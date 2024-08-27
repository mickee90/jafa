import { RootState } from '../../../store/store';

export const isLoggedIn = (state: RootState) => state.auth.loggedIn;
