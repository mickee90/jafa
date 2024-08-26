import React from 'react';
import { Text, View } from 'react-native';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { LoggedOutStackParamList } from '../../../common/navigation/types/NavigationParamLists';
import { ScreenComponent } from '../../../common/layout/ScreenComponent/ScreenComponent';
import { ButtonComponent } from '../../../common/button/ButtonComponent';
import { SpacerComponent } from '../../../common/spacer/SpacerComponent';
import { Title2Component } from '../../../common/typography/title2/Title2Component';

type NavigationProps = NativeStackNavigationProp<LoggedOutStackParamList>;

export const LandingScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <ScreenComponent>
      <TitleBox>
        <Title2Component title="Welcome to JAFA!" />
      </TitleBox>
      <LoginForm />
      <View style={{ paddingBottom: 20 }}>
        <Text>Not a user yet? Sign up here!</Text>
        <SpacerComponent />
        <ButtonComponent
          label="Go to Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </ScreenComponent>
  );
};

const TitleBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
