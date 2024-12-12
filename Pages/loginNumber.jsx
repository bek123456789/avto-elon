import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';

const PhoneInputScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    // Логика продолжения с введённым номером
    console.log('Номер телефона:', phoneNumber);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Личный кабинет</Text>
      <Text style={styles.subtitle}>avtoelon.uz</Text>

      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="+998"
        keyboardType="numeric"
        maxLength={13} // Ограничение на длину номера телефона
        placeholderTextColor="#A0A0A0"
      />

      <TouchableOpacity
        style={[styles.button, phoneNumber.length >= 9 ? styles.buttonActive : styles.buttonDisabled]}
        onPress={handleContinue}
        disabled={phoneNumber.length < 9} // Блокируем кнопку, если номер слишком короткий
      >
        <Text style={styles.buttonText}>Продолжить</Text>
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
