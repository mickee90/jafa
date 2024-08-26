import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';

type Props = {
  label?: string;
  placeholder?: Option;
  options: Option[];
};

type Option = {
  label: string;
  value: string;
};

export const Dropdown = ({ label, placeholder, options }: Props) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const placeholderFallback = {
    label: 'Select an option...',
    value: null,
  };

  return (
    <View>
      <Text>{label || 'Select an option'}:</Text>
      <RNPickerSelect
        placeholder={placeholder || placeholderFallback}
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
      {selectedValue && <Text>Selected: {selectedValue}</Text>}
    </View>
  );
};
