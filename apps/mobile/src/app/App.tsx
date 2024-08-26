import * as React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from '../common/navigation/Navigation';

export const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
