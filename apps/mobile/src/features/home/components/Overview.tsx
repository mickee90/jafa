import { View } from 'react-native';
import styled from '@emotion/native';
import { FilterCard, Paragraph } from '@jafa/jafa-ui';

/**
 * TODO:
 * Break down in components
 * Create filter component
 * Create graph component
 */
export const Overview = () => {
  return (
    <View>
      <FilterCard title="Overview">
        <View>
          <View>
            <Paragraph>insert Graph...</Paragraph>
          </View>
          <Row>
            <Column>
              <Paragraph>Workouts: 0</Paragraph>
            </Column>
            <Column>
              <Paragraph>Lifted: 0 ton</Paragraph>
            </Column>
          </Row>
          <Row>
            <Column>
              <Paragraph>Reps: 0</Paragraph>
            </Column>
            <Column>
              <Paragraph>Sets: 0</Paragraph>
            </Column>
          </Row>
          <Row>
            <Column>
              <Paragraph>Heaviest: 0 kg</Paragraph>
            </Column>
            <Column>
              <Paragraph>Time: 00:00 h</Paragraph>
            </Column>
          </Row>
        </View>
      </FilterCard>
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
