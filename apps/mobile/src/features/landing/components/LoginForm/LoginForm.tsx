import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedInStackParamList } from '../../../../common/navigation/types/NavigationParamLists';
import { InputComponent } from '../../../../common/input/InputComponent';
import { ButtonComponent } from '../../../../common/button/ButtonComponent';
import { Title3Component } from '../../../../common/typography/title3/Title3Component';

type NavigationProps = NativeStackNavigationProp<LoggedInStackParamList>;

export const LoginForm = () => {
  const navigation = useNavigation<NavigationProps>();

  // TODO: Change to formData + add error handling
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    if (username === 'user' && password === 'password') {
      Alert.alert('Login Success', 'You have successfully logged in!');
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
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
