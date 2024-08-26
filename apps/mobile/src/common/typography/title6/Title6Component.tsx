import React from 'react';
import { Text } from 'react-native-paper';

type Props = {
  title: string;
};

export const Title6Component = ({ title }: Props) => {
  return <Text variant="headlineSmall">{title}</Text>;
};
