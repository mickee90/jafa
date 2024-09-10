import { Text } from 'react-native';
import { styles } from '../../../styles/styles';

type Props = {
  children: string | JSX.Element | JSX.Element[] | '() => JSX.Element';
};

export const Paragraph = ({ children }: Props) => {
  return <Text style={{ ...styles.typography }}>{children}</Text>;
};
