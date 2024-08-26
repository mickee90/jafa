import React from 'react';
import { Text } from 'react-native-paper';

type Props = {
  title: string;
};

export const Title1Component = ({ title }: Props) => {
  return <Text variant="displayLarge">{title}</Text>;
};
