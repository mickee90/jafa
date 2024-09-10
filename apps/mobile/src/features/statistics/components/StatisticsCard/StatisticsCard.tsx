import React from 'react';
import { View } from 'react-native';
import styled from '@emotion/native';
import { FilterCard, Paragraph } from '@jafa/jafa-ui';

export const StatisticsCard = () => {
  return (
    <FilterCard title="Statistics">
      <View>
        <Row>
          <Paragraph>Records</Paragraph>
        </Row>
        <Row>
          <Paragraph>History</Paragraph>
        </Row>
        <Row>
          <Paragraph>My 1RMs</Paragraph>
        </Row>
        <Row>
          <Paragraph>Exercises</Paragraph>
        </Row>
        <Row>
          <Paragraph>Muscle groups</Paragraph>
        </Row>
        <Row>
          <Paragraph>Report</Paragraph>
        </Row>
        <Row>
          <Paragraph>All training</Paragraph>
        </Row>
        <Row>
          <Paragraph>Training log</Paragraph>
        </Row>
      </View>
    </FilterCard>
  );
};
const Row = styled.View`
  flex-direction: row;
`;
