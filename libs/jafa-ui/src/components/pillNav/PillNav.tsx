import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface PillNavProps {
  items: string[];
  activeItem: string;
  onItemPress: (item: string) => void;
}

export const PillNav: React.FC<PillNavProps> = ({
  items,
  activeItem,
  onItemPress,
}) => {
  return (
    <View style={styles.container}>
      {items.length > 0 &&
        items.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.pill, activeItem === item && styles.activePill]}
            onPress={() => onItemPress(item)}
          >
            <Text
              style={[
                styles.pillText,
                activeItem === item && styles.activePillText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    borderRadius: 25,
    padding: 4,
  },
  pill: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#3e3e63',
    color: '#fff',
    margin: 4,
  },
  activePill: {
    backgroundColor: '#f35d12',
  },
  pillText: {
    color: '#fff',
  },
  activePillText: {
    color: '#ffffff',
  },
});
