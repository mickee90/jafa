import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';

export interface Program {
  id: string;
  name: string;
  isPremium: boolean;
  typeId: string;
}

export interface ProgramType {
  id: string;
  name: string;
}

export interface GroupedPrograms {
  type: ProgramType;
  programs: Program[];
}

export const ProgramItem: React.FC<{ program: Program }> = ({ program }) => (
  <ProgramItemWrapper>
    <ProgramName>{program.name}</ProgramName>
    <ProgramDetails>
      {program.isPremium && <Icon name="star" size={16} color="#FFD700" />}
    </ProgramDetails>
  </ProgramItemWrapper>
);

const ProgramItemWrapper = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #010205;
`;

const ProgramName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

const ProgramDetails = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

const ProgramType = styled.Text`
  margin-left: 8px;
  color: #666;
`;
