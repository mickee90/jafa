import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LandingScreen } from '../../features/landing/screens/LandingScreen';
import { SignUpScreen } from '../../features/signUp/screens/SignUpScreen';
import { HomeScreen } from '../../features/home/screens/HomeScreen';
import { StatisticsScreen } from '../../features/statistics/screens/StatisticsScreen';
import { ProgramsScreen } from '../../features/programs/screens/ProgramsScreen';
import { SettingsScreen } from '../../features/settings/screens/SettingsScreen';
import {
  LoggedInStackParamList,
  LoggedOutStackParamList,
} from './types/NavigationParamLists';
// import WorkoutScreen from '../../features/workout/screens/WorkoutScreen';
import { ChooseExcerciseScreen } from '../../features/workout/screens/ChooseExcerciseScreen';
import { isLoggedIn } from '../../features/auth/ducks/authSelectors';
import { useAppSelector } from '../../store/store';

export const Navigation = () => {
  const isAuth = useAppSelector(isLoggedIn);

  const LoggedOutStack = createNativeStackNavigator<LoggedOutStackParamList>();
  const LoggedInStack = createBottomTabNavigator<LoggedInStackParamList>();

  const LoggedOutNavigator = () => (
    <LoggedOutStack.Navigator
      initialRouteName="Landing"
      screenOptions={{ headerShown: false }}
    >
      <LoggedOutStack.Screen name="Landing" component={LandingScreen} />
      <LoggedOutStack.Screen name="SignUp" component={SignUpScreen} />
    </LoggedOutStack.Navigator>
  );

  const LoggedInNavigator = () => (
    <LoggedInStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <LoggedInStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <LoggedInStack.Screen name="Statistics" component={StatisticsScreen} />
      {/* <LoggedInStack.Screen name="CreateWorkout" component={WorkoutScreen} /> */}
      {/* <LoggedInStack.Screen name="StartNewWorkout" component={WorkoutScreen} /> */}
      <LoggedInStack.Screen
        name="ChooseExcercise"
        component={ChooseExcerciseScreen}
      />
      <LoggedInStack.Screen name="Programs" component={ProgramsScreen} />
      <LoggedInStack.Screen name="Settings" component={SettingsScreen} />
    </LoggedInStack.Navigator>
  );

  return isAuth ? <LoggedInNavigator /> : <LoggedOutNavigator />;
};
