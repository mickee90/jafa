import styled from '@emotion/native';
import * as React from 'react';
import { Button } from 'react-native-paper';

type Props = {
  label: string;
  onPress: () => void;
  mode?: 'text' | 'contained' | 'outlined' | 'elevated' | 'contained-tonal';
};

export const ButtonComponent = ({
  label,
  onPress,
  mode = 'contained',
}: Props) => {
  return (
    <Container>
      <Button mode={mode} onPress={onPress}>
        {label}
      </Button>
    </Container>
  );
};

const Container = styled.View`
  padding-bottom: 8px;
`;
