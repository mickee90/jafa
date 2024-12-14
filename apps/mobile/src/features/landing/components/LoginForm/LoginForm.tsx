import React, { useState } from 'react';
import { View } from 'react-native';
import { useAppDispatch } from '../../../../store/store';
import { authActions } from '../../../auth/ducks/authSlice';
import {
  ButtonComponent,
  Title3Component,
  InputComponent,
} from '@jafa/jafa-ui';
import { useLogin } from '../../../auth/hooks/useLogin';
import styled from '@emotion/native';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { login, loading, error } = useLogin();
  const [loginError, setLoginError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    try {
      const user = await login(email, password);
      if (user) {
        dispatch(authActions.login());
      }
    } catch (err) {
      setLoginError(error.message ? error.message : err.message);
    }
  };

  return (
    <View>
      <Title3Component title="Login" />
      <InputComponent
        label="Email"
        onChangeText={(value) => setEmail(value)}
        placeholder="Email"
        value={email}
      />
      <InputComponent
        label="Password"
        onChangeText={(value) => setPassword(value)}
        placeholder="Password"
        value={password}
        secureTextEntry={true}
      />
      <ButtonComponent label="Login" onPress={onLogin} disabled={loading} />
      {loginError && <ErrorText>Error: {loginError}</ErrorText>}
    </View>
  );
};

const ErrorText = styled.Text`
  color: red;
`;
