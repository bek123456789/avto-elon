import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Components/LoginScreen';
import SignUpScreen from './Components/SignUpScreen';
import AvtoelonScreen from './Components/AvtoelonScreen';
import SaqlanganScreen from './Components/SaqlanganScreen';
import SotishScreen from './Components/SotishScreen';
import ChatScreen from './Components/ChatScreen';
import KabinetScreen from './Components/KabinetScreen';
import Footer from './Components/Footer';
import { SafeAreaView, StyleSheet, View } from 'react-native';

// Create Stack Navigators
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);


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

  // Main app stack (after login)
  const AppNavigator = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <AppStack.Navigator initialRouteName="Avtoelon">
          <AppStack.Screen name="Avtoelon" component={AvtoelonScreen} />
          <AppStack.Screen name="Saqlangan" component={SaqlanganScreen} />
          <AppStack.Screen name="Sotish" component={SotishScreen} />
          <AppStack.Screen name="Chat" component={ChatScreen} />
          <AppStack.Screen name="Kabinet" component={KabinetScreen} />
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
