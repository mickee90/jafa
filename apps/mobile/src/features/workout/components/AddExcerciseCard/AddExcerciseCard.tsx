import React, { useState } from 'react';
import { View, Button, TouchableOpacity, StyleSheet, Text } from 'react-native';
import {
  Excercise,
  ExcerciseSet,
  WorkoutExcerciseGroup,
} from '../../screens/StartNewWorkoutScreen';

type Props = {
  excercise: Excercise;
  onAddExcercise: (workoutExcerciseGroup: WorkoutExcerciseGroup) => void;
};

export const AddExcerciseCard = ({ excercise, onAddExcercise }: Props) => {
  const [sets, setSets] = useState<ExcerciseSet[]>([]);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.row}>
          <View>
            <Text>Bench Press</Text>
          </View>
          <View>
            <Button title="question" />
            <Button title="More" />
          </View>
        </View>
        {/* <View style={styles.row}>
          <TouchableOpacity>
            <Text style={styles.link}>+ Warm-up</Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <View style={styles.cardBody}>
        <View>
          <Text>1</Text>
          <Text>0 kg</Text>
          <Text>0 reps</Text>
          <Text>
            <Button title="More" />
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.link}>+ Set</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            title="Done"
            onPress={() => onAddExcercise({ excercise, sets })}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#999',
    borderRadius: 10,
    color: '#fff',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  cardBody: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  link: {
    color: 'red',
    textDecorationLine: 'underline',
  },
});
