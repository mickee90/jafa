import styled from '@emotion/native';
import * as React from 'react';
import { Button } from 'react-native-paper';
import { ViewStyle } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  mode?: 'text' | 'contained' | 'outlined' | 'elevated' | 'contained-tonal';
  containerStyle?: ViewStyle;
  testID?: string;
};

export const ButtonComponent = ({
  label,
  onPress,
  disabled = false,
  mode = 'contained',
  containerStyle,
  testID,
}: Props) => {
  return (
    <Container style={containerStyle} testID={testID}>
      <Button mode={mode} onPress={onPress} disabled={disabled}>
        {label}
      </Button>
    </Container>
  );
};

const Container = styled.View`
  padding-bottom: 8px;
`;
