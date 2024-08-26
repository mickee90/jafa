import React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedOutStackParamList } from '../../../common/navigation/types/NavigationParamLists';
import { SignUpForm } from '../components/SignUpForm/SignUpForm';

type NavigationProps = NativeStackNavigationProp<LoggedOutStackParamList>;

export const SignUpScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View>
      <Text>Welcome!</Text>
      <Text>
        Before you begin using Jafa, you need to choose an unique username and
        some more information about yourself
      </Text>
      <SignUpForm />
      <Text>Not a user yet? Sign up here!</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};
