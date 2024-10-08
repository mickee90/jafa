import styled from '@emotion/native';
import { MyProfileSection } from './myProfileSection/MyProfileSection';

export const TopBar = () => {
  return (
    <Container>
      <MyProfileSection />
      <BodyMeasurements>Body Measurements</BodyMeasurements>
      <TrainingLog>Training Log</TrainingLog>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  border-bottom: 1px;
  border-bottom-color: #333;
  border-bottom-width: 1px;
  padding-horizontal: 20px;
  background-color: #0e172a;
`;

const BodyMeasurements = styled.Text`
  flex: 1;
  align-items: center;
  color: #fff;
`;

const TrainingLog = styled.Text`
  flex: 1;
  align-items: center;
  color: #fff;
`;
