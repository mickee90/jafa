import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';

type Props = {
  options: Option[];
  defaultOption: Option;
};

type Option = {
  label: string;
  value: string;
};

const placeholderFallback = {
  label: 'Select an option...',
  value: '',
};

export const Dropdown = ({ options, defaultOption }: Props) => {
  const [value, setValue] = useState<string | undefined>(defaultOption.value);

  const allOptions = [placeholderFallback, ...options].map((option) => {
    return (
      <Picker.Item
        label={option.label}
        value={option.value}
        key={option.value}
      />
    );
  });

  return (
    <View>
      <Picker
        style={{ height: 50, width: 190 }}
        onValueChange={(v: string) => setValue(v)}
        selectedValue={value}
        key={value}
      >
        {allOptions}
      </Picker>
    </View>
  );
};
