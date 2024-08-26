import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LandingScreen } from '../../features/landing/screens/LandingScreen';
import { SignUpScreen } from '../../features/signUp/screens/SignUpScreen';
import { HomeScreen } from '../../features/home/screens/HomeScreen';
import { StatisticsScreen } from '../../features/statistics/screens/StatisticsScreen';
import { ProgramsScreen } from '../../features/programs/screens/ProgramsScreen';
import { ProfileScreen } from '../../features/profile/screens/ProfileScreen';
import {
  LoggedInStackParamList,
  LoggedOutStackParamList,
} from './types/NavigationParamLists';
import WorkoutScreen from '../../features/workout/screens/WorkoutScreen';
import { ChooseExcerciseScreen } from '../../features/workout/screens/ChooseExcerciseScreen';

export const Navigation = () => {
  const [isAuth] = useState(false);
  // const [isAuth, setIsAuth] = useState(false);

  const LoggedOutStack = createNativeStackNavigator<LoggedOutStackParamList>();
  const LoggedInStack = createBottomTabNavigator<LoggedInStackParamList>();

  const LoggedOutNavigator = () => (
    <LoggedOutStack.Navigator initialRouteName="Landing">
      <LoggedOutStack.Screen name="Landing" component={LandingScreen} />
      <LoggedOutStack.Screen name="SignUp" component={SignUpScreen} />
    </LoggedOutStack.Navigator>
  );

  const LoggedInNavigator = () => (
    <LoggedInStack.Navigator initialRouteName="Home">
      <LoggedInStack.Screen name="Home" component={HomeScreen} />
      <LoggedInStack.Screen name="Statistics" component={StatisticsScreen} />
      {/* <LoggedInStack.Screen name="CreateWorkout" component={WorkoutScreen} /> */}
      {/* <LoggedInStack.Screen name="StartNewWorkout" component={WorkoutScreen} /> */}
      <LoggedInStack.Screen
        name="ChooseExcercise"
        component={ChooseExcerciseScreen}
      />
      <LoggedInStack.Screen name="Programs" component={ProgramsScreen} />
      <LoggedInStack.Screen name="Profile" component={ProfileScreen} />
    </LoggedInStack.Navigator>
  );

  return isAuth ? <LoggedInNavigator /> : <LoggedOutNavigator />;
};
