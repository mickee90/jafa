import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, Text } from 'react-native';
import { AddExerciseCard } from '../components/AddExerciseCard/AddExerciseCard';

export type ExerciseSet = {
  setNumber: number;
  weight: number;
  reps: number;
};

export type Exercise = {
  id: string;
  name: string;
};

export type WorkoutExerciseGroup = {
  exercise: Exercise;
  sets: ExerciseSet[];
};

export const StartNewWorkoutScreen = () => {
  const [isAddingExercise, setIsAddingExercise] = useState(false);
  const [exercise, setExercise] = useState<Exercise>({
    id: '12345',
    name: 'Bench press',
  });
  const [workoutExerciseGroups, setWorkoutExerciseGroups] = useState<
    WorkoutExerciseGroup[]
  >([]);

  const onAddExercise = (workoutExerciseGroup: WorkoutExerciseGroup) => {
    setWorkoutExerciseGroups(
      (workoutExerciseGroups: WorkoutExerciseGroup[]) => [
        ...workoutExerciseGroups,
        workoutExerciseGroup,
      ]
    );
  };

  const onSettingsPress = () => {
    Alert.alert('Settings!');
  };

  const onDonePress = () => {
    Alert.alert('Done!');
  };

  const onExercisePress = () => {
    Alert.alert('Add Exercise!');
  };

  const onSpecialSetPress = () => {
    Alert.alert('Special Set!');
  };

  return (
    <View>
      <View style={styles.row}>
        <View></View>
        <View>
          <Button title="Settings" onPress={onSettingsPress} />
          <Button title="Done" onPress={onDonePress} />
        </View>
      </View>
      {isAddingExercise && (
        <AddExerciseCard exercise={exercise} onAddExercise={onAddExercise} />
      )}
      <View style={styles.row}>
        <Button title="+ Exercise" onPress={onExercisePress} />
        <Button title="+ Special Set" onPress={onSpecialSetPress} />
      </View>
      <View>
        <View>
          <Text>Summary</Text>
          <View style={styles.row}>
            <View>
              <Text>Total weight</Text>
              <Text>0 ton</Text>
            </View>
            <View>
              <Text>Total sets</Text>
              <Text>0</Text>
            </View>
            <View>
              <Text>Total reps</Text>
              <Text>0</Text>
            </View>
          </View>
        </View>
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
