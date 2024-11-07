import styled from '@emotion/native';
import { ProgramItem } from '../ProgramItem/ProgramItem';
import { usePrograms } from '../../hooks/usePrograms';
import { Card } from '@jafa/jafa-ui';

export const ProgramListContainer = () => {
  const { groupedPrograms } = usePrograms();

  return (
    <Container>
      {groupedPrograms.map((group) => (
        <Card
          key={group.type.id}
          title={group.type.name}
          headerRight={
            group.type.isPremium ? <PremiumText>Premium</PremiumText> : ''
          }
        >
          {group.programs.map((program) => (
            <ProgramItem key={program.id} program={program} />
          ))}
        </Card>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const PremiumText = styled.Text`
  color: green;
`;
