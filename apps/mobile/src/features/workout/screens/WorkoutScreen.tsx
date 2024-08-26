import React, { useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedInStackParamList } from '../../../common/navigation/types/NavigationParamLists';

type NavigationProps = NativeStackNavigationProp<LoggedInStackParamList>;

export default function WorkoutScreen() {
  const navigation = useNavigation<NavigationProps>();
  const bottomSheetRef = useRef(null);

  const snapPoints = ['25%', '50%'];

  const handleOpenPress = () => {
    bottomSheetRef.current?.expand();
  };

  const onStartNewWorkout = () => {
    // navigation.navigate('StartNewWorkout');
  };

  return (
    <View style={styles.container}>
      <Button title="Open Bottom Sheet" onPress={handleOpenPress} />
      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Button title="Start new workout" onPress={() => onStartNewWorkout} />
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
