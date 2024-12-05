import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons

const AvtoelonScreen = () => {
  const handlePress = (section) => {
    // Handle button press for each section
    console.log(`${section} button pressed!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Avtoelon.uz</Text>
        <TouchableOpacity onPress={() => handlePress('News')} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Yangiliklar</Text>
        </TouchableOpacity>
      </View>

      {/* Sell button at the top */}
      <TouchableOpacity onPress={() => handlePress('Sell')} style={styles.sellButton}>
        <Text style={styles.sellButtonText}>Sotish</Text>
      </TouchableOpacity>

      {/* Announcement Section */}
      <View style={styles.announcement}>
        <Text style={styles.announcementText}>Elonlar</Text>
      </View>

      {/* Buttons for different sections */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => handlePress('Cars')} style={styles.sectionButton}>
          <Icon name="car" size={60} color="white" />
          <Text style={styles.buttonText}>Avtomobillar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Trucks')} style={styles.sectionButton}>
          <Icon name="truck" size={60} color="white" />
          <Text style={styles.buttonText}>Yuk Mashinalari</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Spare Parts')} style={styles.sectionButton}>
          <Icon name="wrench" size={60} color="white" />
          <Text style={styles.buttonText}>Ehtiyot Qismlari</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Special Equipment')} style={styles.sectionButton}>
          <Icon name="gears" size={60} color="white" />
          <Text style={styles.buttonText}>Maxsus Texnika</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Repair Services')} style={styles.sectionButton}>
          <Icon name="wrench" size={60} color="white" />
          <Text style={styles.buttonText}>Ta'mirlash Xizmatlari</Text>
        </TouchableOpacity>
      </View>

      {/* Useful Offers Section */}
      <View style={styles.offersContainer}>
        <TouchableOpacity onPress={() => handlePress('Good Price')} style={styles.offerButton}>
          <Icon name="tag" size={45} color="white" />
          <Text style={styles.buttonText}>Zo'r Narx</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Rent with Option to Buy')} style={styles.offerButton}>
          <Icon name="money" size={45} color="white" />
          <Text style={styles.buttonText}>Arenda S Vikupom</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Up to 4000 USD')} style={styles.offerButton}>
          <Icon name="usd" size={45} color="white" />
          <Text style={styles.buttonText}>4000 Y.E Gacha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Up to 8000 USD')} style={styles.offerButton}>
          <Icon name="usd" size={45} color="white" />
          <Text style={styles.buttonText}>8000 Y.E Gacha</Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <Text style={styles.text}>Avtoelon.uz-ga Xush Kelibsiz!</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff', // White background for a clean look
    paddingBottom: 20,
    paddingTop: 10,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#0044cc', // Darker blue for header
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text in header
  },
  headerButton: {
    backgroundColor: '#003399', // Darker shade of blue for header button
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  headerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // White text for the button
  },
  sellButton: {
    backgroundColor: '#0088cc', // Lighter blue for Sell button
    paddingVertical: 18,
    borderRadius: 30,
    marginTop: 20,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  sellButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // White text on blue button
  },
  announcement: {
    width: '100%',
    padding: 20,
    backgroundColor: '#cce0ff', // Light blue background for announcement section
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  announcementText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', // Dark text for announcements
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  sectionButton: {
    backgroundColor: '#0066cc', // Medium blue for section buttons
    borderRadius: 20,
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  offerButton: {
    backgroundColor: '#4CAF50', // Green background for offer buttons (contrast with blue)
    borderRadius: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // White text on all buttons
    marginTop: 12,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Dark color for the main text
    marginTop: 30,
    textAlign: 'center',
  },
  offersContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default AvtoelonScreen;
