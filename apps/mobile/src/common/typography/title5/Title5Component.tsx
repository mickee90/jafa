import React from 'react';
import { Text } from 'react-native-paper';

type Props = {
  title: string;
};

export const Title5Component = ({ title }: Props) => {
  return <Text variant="headlineMedium">{title}</Text>;
};
