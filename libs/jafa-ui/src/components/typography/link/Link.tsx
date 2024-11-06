import { Text } from 'react-native';
import { styles } from '../../../styles/styles';

type Props = {
  children: string | JSX.Element | JSX.Element[] | '() => JSX.Element';
};

export const Link = ({ children }: Props) => {
  return <Text style={{ ...styles.link }}>{children}</Text>;
};
