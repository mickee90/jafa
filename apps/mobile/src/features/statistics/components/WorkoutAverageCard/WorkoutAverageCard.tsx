import { View } from 'react-native';
import styled from '@emotion/native';
import { Card, Paragraph } from '@jafa/jafa-ui';

export const WorkoutAverageCard = () => {
  return (
    <View>
      <Card title="Workout average">
        <View>
          <Row>
            <Column>
              <Paragraph>Exercises: 0</Paragraph>
            </Column>
            <Column>
              <Paragraph>Sets: 0 ton</Paragraph>
            </Column>
            <Column>
              <Paragraph>Reps: 0 ton</Paragraph>
            </Column>
          </Row>
          <Row>
            <Column>
              <Paragraph>Average weight: 0</Paragraph>
            </Column>
            <Column>
              <Paragraph>Ton: 0</Paragraph>
            </Column>
            <Column>
              <Paragraph>Time: 00:00</Paragraph>
            </Column>
          </Row>
        </View>
      </Card>
    </View>
  );
};

const Row = styled.View`
  flex-direction: row;
`;

const Column = styled.Text`
  flex: 1;
  flex-direction: column;
`;
