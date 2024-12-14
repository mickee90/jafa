import * as React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import 'react-native-devsettings/withAsyncStorage';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import client from '../graphql/client';
import { Navigation } from '../common/navigation/Navigation';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <PaperProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  );
};

export default App;
