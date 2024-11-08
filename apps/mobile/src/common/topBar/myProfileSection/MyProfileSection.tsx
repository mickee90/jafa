import styled from '@emotion/native';
import { Paragraph } from '@jafa/jafa-ui';

export const MyProfileSection = () => {
  return (
    <Container>
      <Section>
        <Avatar>
          <Paragraph>Avatar</Paragraph>
        </Avatar>
        <NameUsername>
          <Paragraph>Mikael Nisson</Paragraph>
          <Paragraph>@micke</Paragraph>
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
  gap: 8px;
  align-items: center;
`;

const Avatar = styled.View`
  //  src
`;

const NameUsername = styled.View`
  // flex-direction: row;
`;
