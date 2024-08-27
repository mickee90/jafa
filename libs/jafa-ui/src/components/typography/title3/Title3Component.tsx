import React from 'react';
import { Text } from 'react-native-paper';

type Props = {
  title: string;
};

export const Title3Component = ({ title }: Props) => {
  return <Text variant="displaySmall">{title}</Text>;
};
