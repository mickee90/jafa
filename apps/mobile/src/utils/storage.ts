import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to save data
const set = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error saving data', error);
  }
};

// Function to retrieve data
const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.error('Error retrieving data', error);
  }
};

// Function to remove data
const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data', error);
  }
};

export const LocalStorage = {
  set,
  get,
  remove,
};
