import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SaqlanganScreen = () => {
  const [activeTab, setActiveTab] = useState("E'lonlar");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Tab bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "E'lonlar" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("E'lonlar")}
        >
          <Text
            style={
              activeTab === "E'lonlar"
                ? styles.activeTabText
                : styles.tabText
            }
          >
            E'lonlar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Poisklar' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('Poisklar')}
        >
          <Text
            style={
              activeTab === 'Poisklar' ? styles.activeTabText : styles.tabText
            }
          >
            Poisklar
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {activeTab === "E'lonlar" ? (
        <View style={styles.contentContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.freepik.com/512/2481/2481681.png?ga=GA1.1.1470930395.1733759492' }} // E'lonlar sahifasi rasmi
            style={styles.image}
          />
          <Text style={styles.title}>Qiziqarli mashinalarni saqlang</Text>
          <Text style={styles.description}>
            E'longa <Text style={{ fontWeight: 'bold' }}>♡</Text> bosing va o'zingizga saqlang
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Avtoelon')}
          >
            <Text style={styles.buttonText}>Asosiy sahifaga qaytish</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.freepik.com/512/2481/2481681.png?ga=GA1.1.1470930395.1733759492' }} // Poisklar sahifasi rasmi
            style={styles.image}
          />
          <Text style={styles.title}>Poisk nastroykasini saqlang</Text>
          <Text style={styles.description}>
            Poiskda <Text style={{ fontWeight: 'bold' }}>♡</Text> bosing va yangi e'lonlardan birinchi bo'lib xabardor bo'ling
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('PoiskPage')}
          >
            <Text style={styles.buttonText}>Qidiruvga o'tish</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    width: 350,
    display: 'flex',
    justifyContent: 'center',
    gap: 50,
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 30,
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: '#ffffff',
  },
  tabText: {
    fontSize: 16,
    color: '#777',
  },
  activeTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -200,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SaqlanganScreen;
