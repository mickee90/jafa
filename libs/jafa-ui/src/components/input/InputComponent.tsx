import styled from '@emotion/native';
import * as React from 'react';
import { TextInput } from 'react-native-paper';

type Props = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean | undefined;
  mode?: 'outlined' | 'flat' | undefined;
};

export const InputComponent = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  mode = 'outlined',
}: Props) => {
  return (
    <Container>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        mode={mode}
      />
    </Container>
  );
};

const Container = styled.View`
  padding-bottom: 8px;
`;
