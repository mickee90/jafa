import { Text } from 'react-native-paper';
import { styles } from '../../../styles/styles';

type Props = {
  title: string;
};

export const Title1Component = ({ title }: Props) => {
  return (
    <Text variant="displayLarge" style={{ ...styles.typography }}>
      {title}
    </Text>
  );
};
