import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SettingsScreen from '../Pages/setting';
import PhoneInputScreen from '../Pages/loginNumber';



const KabinetStack = createStackNavigator();

const KabinetMainScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Кабинет</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.settingsText}>Настройки</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Войти по номеру телефона</Text>
      </TouchableOpacity>qa

      <Text style={styles.footer}>avtoelon.uz</Text>
      <Text style={styles.version}>Версия 24.11.30 (204)</Text>
    </View>
  );
};

const KabinetScreen = () => {
  return (
    <KabinetStack.Navigator>
      {/* Главный экран Кабинета */}
      <KabinetStack.Screen
        name="KabinetMain"
        component={KabinetMainScreen}
        options={{ headerShown: false }} // Скрываем заголовок для главного экрана
      />
      {/* Экран Настроек */}
      <KabinetStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Настройки' }}
      />
      {/* Экран Логина */}
      <KabinetStack.Screen
        name="Login"
        component={PhoneInputScreen}
        options={{ title: 'Вход' }}
      />
    </KabinetStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  settingsText: {
    fontSize: 16,
    color: '#007AFF',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    marginTop: 'auto',
    textAlign: 'center',
    color: '#A0A0A0',
    fontSize: 14,
  },
  version: {
    textAlign: 'center',
    color: '#A0A0A0',
    fontSize: 12,
  },
});

export default KabinetScreen;
