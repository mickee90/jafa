import React from 'react';
import { Text } from 'react-native-paper';

type Props = {
  title: string;
};

export const Title4Component = ({ title }: Props) => {
  return <Text variant="headlineLarge">{title}</Text>;
};
