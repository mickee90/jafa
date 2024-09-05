import styled from '@emotion/native';
import { View, Text } from 'react-native';

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
            <Text>{title}</Text>
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
            onPress={() => onAddExcercise({ excercise, sets })}
          /> */}
        {/* </TouchableOpacity> */}
      </Row>
    </CardStyles>
  );
};

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const CardStyles = styled.View`
  background-color: #999;
  border-radius: 10;
  color: #fff;
`;

const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #000;
  border-bottom-width: 1;
`;

const CardBody = styled.View`
  border-bottom-color: #000;
  border-bottom-width: 1;
`;

const Link = styled.Text`
  color: red;
  text-decoration-line: underline;
`;
