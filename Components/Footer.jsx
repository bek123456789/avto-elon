import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Avtoelon')}>
        <Ionicons name="car" size={30} color="#007bff" />
        <Text style={styles.footerText}>Avtoelon.uz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Saqlangan')}>
        <Ionicons name="bookmark" size={30} color="#007bff" />
        <Text style={styles.footerText}>Saqlangan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Sotish')}>
        <Ionicons name="cash" size={30} color="#007bff" />
        <Text style={styles.footerText}>Sotish</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Chat')}>
        <Ionicons name="chatbubbles" size={30} color="#007bff" />
        <Text style={styles.footerText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Kabinet')}>
        <Ionicons name="person" size={30} color="#007bff" />
        <Text style={styles.footerText}>Kabinet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',  // White background
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    zIndex: 10,
    shadowColor: '#000', // Optional: add shadow for iOS
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,  // For Android shadow
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    color: '#007bff', // Blue text color
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Footer;
