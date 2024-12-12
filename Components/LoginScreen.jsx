import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';

const BASE_URL = 'https://avto-elon-node.onrender.com'; // Updated URL

const LoginScreen = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        setError(''); // Clear previous errors
        try {
            // Send email and password in the request body as JSON
            const response = await fetch(`${BASE_URL}/api/users`, {
                method: 'GET', // Fetch all users (assuming backend returns users with this GET request)
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                setError('Error fetching users');
                setLoading(false);
                return;
            }

            const users = await response.json();
            const user = users.find((u) => u.email === email && u.password === password); // Find user by email and password

            if (user) {
                setUser(user); // Successfully log in
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('Error logging in. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Avtoelon.uz</Text>
                {error ? <Text style={styles.error}>{error}</Text> : null}
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    placeholderTextColor="#aaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholderTextColor="#aaa"
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                {loading && <ActivityIndicator size="large" color="#007BFF" style={styles.loading} />}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        borderWidth: 0,
        borderRadius: 12,
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#f9f9f9',
        color: '#333',
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    error: {
        color: '#ff4d4d',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 14,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    loading: {
        marginTop: 20,
    },
});

export default LoginScreen;
