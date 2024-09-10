import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonComponent } from '@jafa/jafa-ui';

const WorkoutScreen = () => {
  const navigation = useNavigation();

  const closeModal = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <ButtonComponent
            label="Start new workout"
            onPress={() => {
              // Handle start new workout
            }}
          />
          <ButtonComponent
            label="Train a logged workout again"
            onPress={() => {
              // Handle train logged workout
            }}
          />
          <ButtonComponent
            label="Plan a workout"
            onPress={() => {
              // Handle plan workout
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '75%',
  },
});

export default WorkoutScreen;
