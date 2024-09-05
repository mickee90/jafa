import { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import styled from '@emotion/native';

type Props = {
  label?: string;
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

export const Dropdown = ({ label, options, defaultOption }: Props) => {
  const [value, setValue] = useState<string | undefined>(defaultOption.value);
  const [allOptions, setAllOptions] = useState<Option[]>([placeholderFallback]);

  useEffect(() => {
    // setSelectedValue(defaultOption.value);

    setAllOptions([placeholderFallback, ...options]);
  }, []);

  return (
    <View>
      <Picker
        style={{ height: 50, width: 190 }}
        onValueChange={(v: string) => setValue(v)}
        selectedValue={value}
        key={value}
      >
        {allOptions.map((option) => (
          <Picker.Item
            label={option.label}
            value={option.value}
            key={option.value}
          />
        ))}
      </Picker>
      {value && <HiddenText>Selected: {value}</HiddenText>}
    </View>
  );
};

// TODO: remove hack
const HiddenText = styled.Text`
  color: transparent;
  font-size: 1;
`;
