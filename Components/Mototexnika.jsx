import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import axios from 'axios';

const Mototexnika = () => {
    const [form, setForm] = useState({
        type: '',
        brand: '',
        year: '',
        price: '',
        negotiable: false,
        description: '',
        image: '',
        location: '',
        contactNumber: ''
    });

    const handleChange = (name, value) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://avto-elon-node.onrender.com/api/mototexnika', form);
            Alert.alert('Success', 'Mototexnika added successfully');
            setForm({
                type: '',
                brand: '',
                year: '',
                price: '',
                negotiable: false,
                description: '',
                image: '',
                location: '',
                contactNumber: ''
            });
        } catch (error) {
            Alert.alert('Error', 'Failed to add Mototexnika');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Mototexnika</Text>

            <TextInput
                style={styles.input}
                placeholder="Type"
                value={form.type}
                onChangeText={(value) => handleChange('type', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Brand"
                value={form.brand}
                onChangeText={(value) => handleChange('brand', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Year"
                keyboardType="numeric"
                value={form.year}
                onChangeText={(value) => handleChange('year', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Price"
                keyboardType="numeric"
                value={form.price}
                onChangeText={(value) => handleChange('price', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={form.description}
                onChangeText={(value) => handleChange('description', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Image URL"
                value={form.image}
                onChangeText={(value) => handleChange('image', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Location"
                value={form.location}
                onChangeText={(value) => handleChange('location', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Contact Number"
                keyboardType="phone-pad"
                value={form.contactNumber}
                onChangeText={(value) => handleChange('contactNumber', value)}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Mototexnika;
