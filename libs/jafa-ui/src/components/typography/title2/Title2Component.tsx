import { Text } from 'react-native-paper';
import { styles } from '../../../styles/styles';

type Props = {
  title: string;
};

export const Title2Component = ({ title }: Props) => {
  return (
    <Text variant="displayMedium" style={{ ...styles.typography }}>
      {title}
    </Text>
  );
};
