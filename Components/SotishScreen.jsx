import React from 'react';
import { View, StyleSheet } from 'react-native';
import Sell from './Sell'; // Adjust the path to where the Sell component is located

const SotishScreen = () => {
  return (
    <View style={styles.container}>
      <Sell /> {/* Using the Sell component here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Optional: Matching Sell component's background color
  },
});

export default SotishScreen;
