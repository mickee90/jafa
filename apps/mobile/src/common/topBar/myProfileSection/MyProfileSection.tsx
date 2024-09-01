import { Text } from 'react-native';
import styled from '@emotion/native';

export const MyProfileSection = () => {
  return (
    <Container>
      <Section>
        <Avatar>
          <Text>Avatar</Text>
        </Avatar>
        <NameUsername>
          <Text>Mikael Nisson</Text>
          <Text>@micke</Text>
        </NameUsername>
      </Section>
    </Container>
  );
};

const Container = styled.View`
  flex: 5;
  height: 50px;
`;

const Section = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 8;
  align-items: center;
`;

const Avatar = styled.View`
  //  src
`;

const NameUsername = styled.View`
  // flex-direction: row;
`;
