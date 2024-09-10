import styled from '@emotion/native';
import { View } from 'react-native';
import { Title6Component } from '../../typography';

type Props = {
  title: string;
  headerRight?:
    | undefined
    | string
    | JSX.Element
    | JSX.Element[]
    | '() => JSX.Element';
  children: string | JSX.Element | JSX.Element[] | '() => JSX.Element';
};

export const Card = ({ title, headerRight, children }: Props) => {
  return (
    <CardStyles>
      <CardHeader>
        <Row>
          <View>
            <Title6Component title={title} />
          </View>
          <View>{headerRight}</View>
        </Row>
        {/* <View style={styles.row}>
          <TouchableOpacity>
            <Text style={styles.link}>+ Warm-up</Text>
          </TouchableOpacity>
        </View> */}
      </CardHeader>
      <CardBody>{children}</CardBody>
      <Row>
        {/* <TouchableOpacity>
          <Link>+ Set</Link>
        </TouchableOpacity> */}
        {/* <TouchableOpacity>
          <Button
            title="Done"
            onPress={() => onAddExercise({ excercise, sets })}
          /> */}
        {/* </TouchableOpacity> */}
      </Row>
    </CardStyles>
  );
};

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CardStyles = styled.View`
  border-radius: 10;
  padding-horizontal: 8px;
`;

const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #000;
  border-bottom-width: 1;
  padding-horizontal: 8px;
`;

const CardBody = styled.View`
  border-bottom-color: #000;
  border-bottom-width: 1;
  background-color: #172234;
  padding-horizontal: 8px;
  padding-vertical: 16px;
  border-radius: 8px;
`;

// const Link = styled.Text`
//   color: red;
//   text-decoration-line: underline;
// `;
