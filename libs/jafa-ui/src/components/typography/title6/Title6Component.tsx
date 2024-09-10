import { Text } from 'react-native-paper';
import { styles } from '../../../styles/styles';

type Props = {
  title: string;
};

export const Title6Component = ({ title }: Props) => {
  return (
    <Text variant="headlineSmall" style={{ ...styles.typography }}>
      {title}
    </Text>
  );
};
