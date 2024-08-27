import React, { useState } from 'react';
import { View } from 'react-native';
import { useAppDispatch } from '../../../../store/store';
import { authActions } from '../../../auth/ducks/authSlice';
import {
  ButtonComponent,
  Title3Component,
  InputComponent,
} from '@jafa/jafa-ui';

export const LoginForm = () => {
  const dispatch = useAppDispatch();

  // TODO: Change to formData + add error handling
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    dispatch(authActions.login());

    // TODO: implement later to avoid entering creds all the time
    // if (username === 'user' && password === 'password') {
    //   Alert.alert('Login Success', 'You have successfully logged in!');
    //   dispatch(authActions.login());
    // } else {
    //   Alert.alert('Login Failed', 'Invalid username or password');
    // }
  };

  return (
    <View>
      <Title3Component title="Login" />
      <InputComponent
        label="Username"
        onChangeText={(value) => setUsername(value)}
        placeholder="Username"
        value={username}
      />
      <InputComponent
        label="Password"
        onChangeText={(value) => setPassword(value)}
        placeholder="Password"
        value={password}
        secureTextEntry={true}
      />
      <ButtonComponent label="Login" onPress={onLogin} />
    </View>
  );
};
