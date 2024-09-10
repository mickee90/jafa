import { Text } from 'react-native-paper';
import { styles } from '../../../styles/styles';

type Props = {
  title: string;
};

export const Title4Component = ({ title }: Props) => {
  return (
    <Text variant="headlineLarge" style={{ ...styles.typography }}>
      {title}
    </Text>
  );
};
