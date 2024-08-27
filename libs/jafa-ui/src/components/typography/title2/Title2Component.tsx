import React from 'react';
import { Text } from 'react-native-paper';

type Props = {
  title: string;
};

export const Title2Component = ({ title }: Props) => {
  return <Text variant="displayMedium">{title}</Text>;
};
