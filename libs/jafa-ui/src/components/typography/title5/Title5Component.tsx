import { Text } from 'react-native-paper';
import { styles } from '../../../styles/styles';

type Props = {
  title: string;
};

export const Title5Component = ({ title }: Props) => {
  return (
    <Text variant="headlineMedium" style={{ ...styles.typography }}>
      {title}
    </Text>
  );
};
