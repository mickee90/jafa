import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedInStackParamList } from '../../../../common/navigation/types/NavigationParamLists';
import { Dropdown, RadioButton } from '@jafa/jafa-ui';

type NavigationProps = NativeStackNavigationProp<LoggedInStackParamList>;

export const SignUpForm = () => {
  const navigation = useNavigation<NavigationProps>();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');

  const onSignUp = () => {
    if (
      username === 'user' &&
      password === 'password' &&
      password === confirmPassword
    ) {
      Alert.alert('SignUp Success', 'You have successfully signed up!');
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Sign Up Failed',
        'Invalid username or password or password + confirm password'
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.title}>Choose password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.title}>Confirm password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Text style={styles.title}>Full name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <Text style={styles.title}>Age</Text>
      <CalendarPicker onDateChange={setAge} />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <Text style={styles.title}>Sex</Text>
      <Dropdown
        options={[
          { label: 'Man', value: 'man' },
          { label: 'Woman', value: 'woman' },
          { label: 'Other', value: 'other' },
        ]}
      />
      <Text style={styles.title}>Units</Text>
      <RadioButton initValue="metric" values={['metric', 'imperial']} />
      <Button title="Sign Up" onPress={onSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    // paddingHorizontal: 8,
  },
});
