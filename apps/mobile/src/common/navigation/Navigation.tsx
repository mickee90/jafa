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
import WorkoutScreen from '../../features/workout/screens/WorkoutScreen';
import { ChooseExerciseScreen } from '../../features/workout/screens/ChooseExerciseScreen';
import { isLoggedIn } from '../../features/auth/ducks/authSelectors';
import { useAppSelector } from '../../store/store';
import { TopBar } from '../topBar/TopBar';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

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

  const LoggedInNavigator = () => {
    const MainStack = createBottomTabNavigator<LoggedInStackParamList>();
    const RootStack = createNativeStackNavigator<LoggedInStackParamList>();

    const MainStackScreen = () => (
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{ header: () => <TopBar /> }}
      >
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Statistics" component={StatisticsScreen} />
        <LoggedInStack.Screen
          name="Workout"
          component={EmptyComponent}
          options={{
            tabBarLabel: 'Create Workout',
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.getParent()?.navigate('CreateWorkout');
            },
          })}
        />
        <MainStack.Screen name="Programs" component={ProgramsScreen} />
        <MainStack.Screen name="Settings" component={SettingsScreen} />
      </MainStack.Navigator>
    );

    // const modalScreenOptions = {
    //   presentation: 'modal',
    //   animation: 'slide_from_bottom',
    //   headerShown: false,
    // };

    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="CreateWorkout"
          component={WorkoutScreen}
          options={{
            presentation: 'transparentModal',
            animation: 'slide_from_bottom',
            headerShown: false,
          }}
        />
        {/* <RootStack.Screen
          name="ChooseExercise"
          component={ChooseExerciseScreen}
          options={{ presentation: 'modal' }}
        /> */}
      </RootStack.Navigator>
    );
  };

  // Add this empty component
  const EmptyComponent = () => null;

  // const LoggedInNavigator = () => (
  //   <LoggedInStack.Navigator
  //     initialRouteName="Home"
  //     screenOptions={{ header: () => <TopBar /> }}
  //   >
  //     <LoggedInStack.Screen
  //       name="Home"
  //       component={HomeScreen}
  //       // options={{ headerShown: false }}
  //     />
  //     <LoggedInStack.Screen name="Statistics" component={StatisticsScreen} />
  //     <LoggedInStack.Screen
  //       name="CreateWorkout"
  //       component={WorkoutScreen}
  //       options={{
  //         tabBarLabel: 'Create Workout',
  //       }}
  //       listeners={({ navigation }) => ({
  //         tabPress: (e) => {
  //           e.preventDefault();
  //           // Navigate to the CreateWorkout screen
  //           navigation.navigate('CreateWorkout');
  //         },
  //       })}
  //     />
  //     {/* <LoggedInStack.Screen name="StartNewWorkout" component={WorkoutScreen} /> */}
  //     <LoggedInStack.Screen
  //       name="ChooseExercise"
  //       component={ChooseExerciseScreen}
  //     />
  //     <LoggedInStack.Screen name="Programs" component={ProgramsScreen} />
  //     <LoggedInStack.Screen name="Settings" component={SettingsScreen} />
  //   </LoggedInStack.Navigator>
  // );

  return isAuth ? <LoggedInNavigator /> : <LoggedOutNavigator />;
};
