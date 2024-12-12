import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>Язык</Text>
        <Text style={styles.value}>Русский</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Валюта</Text>
        <Text style={styles.value}>Условные единицы (у.е.)</Text>
      </View>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.buttonText}>Обновить базу</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.buttonText}>О приложении</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.buttonText}>Пользовательское соглашение</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  value: {
    fontSize: 14,
    color: '#666',
  },
  buttonText: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default SettingsScreen;
