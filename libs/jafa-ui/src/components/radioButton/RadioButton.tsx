import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton as PaperRadioButton } from 'react-native-paper';

type Props = {
  initValue: string;
  values: string[];
};

export const RadioButton = ({ initValue, values }: Props) => {
  const [checked, setChecked] = useState(initValue);

  return (
    <View>
      {values.map((value) => {
        return (
          <PaperRadioButton
            value={value}
            status={checked === value ? 'checked' : 'unchecked'}
            onPress={() => setChecked(value)}
          />
        );
      })}
      <Text> {checked}</Text>
    </View>
  );
};
