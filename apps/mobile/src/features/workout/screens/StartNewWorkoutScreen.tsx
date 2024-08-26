import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, Text } from 'react-native';
import { AddExcerciseCard } from '../components/AddExcerciseCard/AddExcerciseCard';

export type ExcerciseSet = {
  setNumber: number;
  weight: number;
  reps: number;
};

export type Excercise = {
  id: string;
  name: string;
};

export type WorkoutExcerciseGroup = {
  excercise: Excercise;
  sets: ExcerciseSet[];
};

export const StartNewWorkoutScreen = () => {
  const [isAddingExcercise, setIsAddingExcercise] = useState(false);
  const [excercise, setExcercise] = useState<Excercise>({
    id: '12345',
    name: 'Bench press',
  });
  const [workoutExcerciseGroups, setWorkoutExcerciseGroups] = useState<
    WorkoutExcerciseGroup[]
  >([]);

  const onAddExcercise = (workoutExcerciseGroup: WorkoutExcerciseGroup) => {
    setWorkoutExcerciseGroups(
      (workoutExcerciseGroups: WorkoutExcerciseGroup[]) => [
        ...workoutExcerciseGroups,
        workoutExcerciseGroup,
      ]
    );
  };

  const onSettingsPress = () => {
    Alert.alert('Settings!');
  };

  const onDonePress = () => {
    Alert.alert('Done!');
  };

  const onExcercisePress = () => {
    Alert.alert('Add Excercise!');
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
      {isAddingExcercise && (
        <AddExcerciseCard
          excercise={excercise}
          onAddExcercise={onAddExcercise}
        />
      )}
      <View style={styles.row}>
        <Button title="+ Exercise" onPress={onExcercisePress} />
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
