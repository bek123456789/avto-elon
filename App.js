import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './Components/LoginScreen';
import SignUpScreen from './Components/SignUpScreen';
import AvtoelonScreen from './Components/AvtoelonScreen';
import SaqlanganScreen from './Components/SaqlanganScreen';
import SotishScreen from './Components/SotishScreen';
import Footer from './Components/Footer';
import ChatScreen from './Components/ChatScreen';
import PoiskPage from './Components/PoiskPage';
import Avtomobil from './Components/Avtomobil';
import Mototexnika from './Components/Mototexnika';
import KabinetScreen from './Components/KabinetScreen';
import SettingsScreen from './Pages/setting';
import PhoneInputScreen from './Pages/loginNumber';


const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('loggedInUser');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error loading user from AsyncStorage', error);
      }
    };
    checkLoggedInUser();
  }, []);

  const AuthNavigator = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login">
        {props => <LoginScreen {...props} setUser={setUser} />}
      </AuthStack.Screen>
      <AuthStack.Screen name="SignUp">
        {props => <SignUpScreen {...props} />}
      </AuthStack.Screen>
    </AuthStack.Navigator>
  );

  const AppNavigator = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <AppStack.Navigator initialRouteName="Avtoelon">
          <AppStack.Screen name="Avtoelon" component={AvtoelonScreen} />
          <AppStack.Screen name="Saqlangan" component={SaqlanganScreen} />
          <AppStack.Screen name="Sotish" component={SotishScreen} />
          <AppStack.Screen name="Avtomobil" component={Avtomobil} />
          <AppStack.Screen name="Mototexnika" component={Mototexnika} />
          <AppStack.Screen name="Chat" options={{ headerShown: false }}>
            {props => (
              <ChatScreen
                {...props}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            )}
          </AppStack.Screen>
          <AppStack.Screen name="Kabinet" component={KabinetScreen} />
          <AppStack.Screen name="PoiskPage" component={PoiskPage} />
          <AppStack.Screen name="Settings" component={SettingsScreen} />
          <AppStack.Screen name="PhoneInput" component={PhoneInputScreen} />
        </AppStack.Navigator>
      </View>
      <Footer />
    </SafeAreaView>
  );

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
});

export default App;
