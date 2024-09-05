import styled from '@emotion/native';
import { FilterCard } from '@jafa/jafa-ui';
import { View, Text } from 'react-native';

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
            <Text>insert Graph...</Text>
          </View>
          <Table>
            <Row>
              <Column>Workouts: 0</Column>
              <Column>Lifted: 0 ton</Column>
            </Row>
            <Row>
              <Column>Reps: 0</Column>
              <Column>Sets: 0</Column>
            </Row>
            <Row>
              <Column>Heaviest: 0 kg</Column>
              <Column>Time: 00:00 h</Column>
            </Row>
          </Table>
        </View>
      </FilterCard>
    </View>
  );
};

const Table = styled.View`
  background-color: transparent;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Column = styled.Text`
  flex: 1;
  flex-direction: column;
`;
