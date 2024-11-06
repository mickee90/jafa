import styled from '@emotion/native';
import {
  Link,
  PillNav,
  ScreenComponent,
  SearchBar,
  SpacerComponent,
} from '@jafa/jafa-ui';
import { ProgramListContainer } from '../components/programListContainer/ProgramListContainer';

export const ProgramsScreen = () => {
  return (
    <ScreenComponent>
      <SearchBar onSearch={(word: string) => console.log(word)} />
      <SpacerComponent />
      <Row>
        <Column>
          <Link>Programs</Link>
        </Column>
      </Row>
      <SpacerComponent />
      <PillNav
        items={[
          'Free',
          'Premium',
          'Beginner',
          'Intermediate',
          'Advanced',
          '2/week',
          '3/week',
          '4/week',
          '5/week',
          '6/week',
        ]}
        activeItem="Free"
        onItemPress={(item: string) => console.log(item)}
      />
      <SpacerComponent />
      <ProgramListContainer />
    </ScreenComponent>
  );
};

const Row = styled.View`
  flex-direction: row;
`;

const Column = styled.Text`
  flex: 1;
  flex-direction: column;
`;
