import styled from '@emotion/native';
import { Card } from '@jafa/jafa-ui';
import { useAppDispatch } from '../../../../store/store';
import { TouchableOpacity } from 'react-native';
import { authActions } from '../../../auth/ducks/authSlice';

export const SettingsContainer = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <Container>
      <Card title="">
        <SettingsList>
          <SettingItem>
            <SettingLink>Language/Språk</SettingLink>
          </SettingItem>
          <SettingItem>
            <SettingLink>Dark mode</SettingLink>
          </SettingItem>
        </SettingsList>
      </Card>

      <SpacerComponent />

      <Card title="">
        <SettingsList>
          <SettingItem>
            <SettingLink>Metrics</SettingLink>
          </SettingItem>
          <SettingItem>
            <SettingLink>Show calorie calculation</SettingLink>
          </SettingItem>
        </SettingsList>
      </Card>

      <SpacerComponent />

      <Card title="">
        <SettingsList>
          <SettingItem>
            <SettingLink>Account</SettingLink>
          </SettingItem>
          <SettingItem>
            <LogoutButton onPress={onLogout}>
              <LogoutText>Logout</LogoutText>
            </LogoutButton>
          </SettingItem>
        </SettingsList>
      </Card>
    </Container>
  );
};

const Container = styled.View`
  padding: 16px;
`;

const SettingsList = styled.View`
  padding: 8px 0;
`;

const SettingItem = styled.View`
  padding: 8px 16px;
`;

const SettingLink = styled.Text`
  font-size: 16px;
  color: #d3d3d3;
`;

const LogoutButton = styled(TouchableOpacity)``;

const LogoutText = styled.Text`
  color: #ff3b30;
  font-size: 16px;
`;

const SpacerComponent = styled.View`
  height: 16px;
`;
