import { Text } from 'react-native-paper';
import { styles } from '../../../styles/styles';

type Props = {
  title: string;
};

export const Title3Component = ({ title }: Props) => {
  return (
    <Text variant="displaySmall" style={{ ...styles.typography }}>
      {title}
    </Text>
  );
};
