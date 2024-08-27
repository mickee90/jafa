import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/ducks/authSlice';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
