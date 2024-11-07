import styled from '@emotion/native';
import { Program } from '../../models/Programs';

export const ProgramItem: React.FC<{ program: Program }> = ({ program }) => (
  <ProgramItemWrapper>
    <ProgramName>{program.name}</ProgramName>
  </ProgramItemWrapper>
);

const ProgramItemWrapper = styled.View`
  padding: 8px;
  border-bottom-width: 1px;
  border-bottom-color: #010205;
`;

const ProgramName = styled.Text`
  font-size: 16px;
  color: #fff;
`;
