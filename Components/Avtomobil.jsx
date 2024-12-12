import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';

const Avtomobil = () => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [position, setPosition] = useState('');
    const [paintCondition, setPaintCondition] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('+998');
    const [imgUrl, setImgUrl] = useState('');
    const [mileage, setMileage] = useState('');
    const [location, setLocation] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const brands = [
        { label: 'Chevrolet', value: 'Chevrolet', models: ['Cobalt', 'Malibu', 'Captiva', 'Equinox'] },
        { label: 'Hyundai', value: 'Hyundai', models: ['Accent', 'Tucson', 'Sonata', 'Elantra'] },
        { label: 'Toyota', value: 'Toyota', models: ['Camry', 'Corolla', 'Land Cruiser', 'Prado'] },
    ];

    const positions = ['New', 'Used'];
    const conditions = ['Excellent', 'Good', 'Fair'];

    const brandModels = brands.find((b) => b.value === brand)?.models || [];

    const handlePhoneChange = (value) => {
        if (!value.startsWith('+998')) {
            setPhone('+998');
        } else {
            setPhone(value);
        }
    };

    const handleSubmit = async () => {
        if (
            !brand ||
            !model ||
            !year ||
            !position ||
            !paintCondition ||
            !price ||
            !description ||
            phone.length < 13 ||
            !imgUrl ||
            !mileage ||
            !location
        ) {
            Alert.alert('Error', 'Please fill out all fields correctly.');
            return;
        }

        const yearNumber = parseInt(year, 10);
        if (yearNumber < 1900 || yearNumber > new Date().getFullYear()) {
            Alert.alert('Error', 'Year must be between 1900 and the current year.');
            return;
        }

        const mileageNumber = parseInt(mileage, 10);
        if (isNaN(mileageNumber) || mileageNumber <= 0) {
            Alert.alert('Error', 'Mileage must be a valid number greater than 0.');
            return;
        }

        const carData = {
            brand,
            model,
            year: yearNumber,
            position,
            paintCondition,
            price: parseFloat(price),
            description,
            phone,
            img_url: imgUrl,
            mileage: mileageNumber,
            location,
        };

        setIsSubmitting(true);

        try {
            const response = await fetch('https://avto-elon-node.onrender.com/api/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carData),
            });

            if (response.ok) {
                const result = await response.json();
                Alert.alert('Success', 'Car listing saved successfully!');
                console.log('Response:', result);

                // Reset the form
                setBrand('');
                setModel('');
                setYear('');
                setPosition('');
                setPaintCondition('');
                setPrice('');
                setDescription('');
                setPhone('+998');
                setImgUrl('');
                setMileage('');
                setLocation('');
            } else {
                const errorResult = await response.json();
                console.error('Error Response:', errorResult);
                Alert.alert('Error', errorResult.message || 'Failed to save car listing.');
            }
        } catch (error) {
            console.error('API Error:', error);
            Alert.alert('Error', 'An error occurred while saving the car listing. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Avtomobil qo'shish</Text>

                <Text style={styles.label}>Brand:</Text>
                <RNPicker
                    selectedValue={brand}
                    style={styles.picker}
                    onValueChange={(itemValue) => setBrand(itemValue)}
                >
                    <RNPicker.Item label="Select Brand" value="" />
                    {brands.map((b) => (
                        <RNPicker.Item key={b.value} label={b.label} value={b.value} />
                    ))}
                </RNPicker>

                {brand && (
                    <>
                        <Text style={styles.label}>Model:</Text>
                        <RNPicker
                            selectedValue={model}
                            style={styles.picker}
                            onValueChange={(itemValue) => setModel(itemValue)}
                        >
                            <RNPicker.Item label="Select Model" value="" />
                            {brandModels.map((m) => (
                                <RNPicker.Item key={m} label={m} value={m} />
                            ))}
                        </RNPicker>
                    </>
                )}

                <Text style={styles.label}>Year:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Year"
                    value={year}
                    onChangeText={setYear}
                />

                <Text style={styles.label}>Mileage (km):</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Mileage"
                    value={mileage}
                    onChangeText={setMileage}
                />

                <Text style={styles.label}>Location:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Location (City/Region)"
                    value={location}
                    onChangeText={setLocation}
                />

                <Text style={styles.label}>Position:</Text>
                <RNPicker
                    selectedValue={position}
                    style={styles.picker}
                    onValueChange={(itemValue) => setPosition(itemValue)}
                >
                    <RNPicker.Item label="Select Position" value="" />
                    {positions.map((pos) => (
                        <RNPicker.Item key={pos} label={pos} value={pos} />
                    ))}
                </RNPicker>

                <Text style={styles.label}>Paint Condition:</Text>
                <RNPicker
                    selectedValue={paintCondition}
                    style={styles.picker}
                    onValueChange={(itemValue) => setPaintCondition(itemValue)}
                >
                    <RNPicker.Item label="Select Condition" value="" />
                    {conditions.map((cond) => (
                        <RNPicker.Item key={cond} label={cond} value={cond} />
                    ))}
                </RNPicker>

                <Text style={styles.label}>Price:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Price"
                    value={price}
                    onChangeText={setPrice}
                />

                <Text style={styles.label}>Description:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                />

                <Text style={styles.label}>Phone:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={phone}
                    onChangeText={handlePhoneChange}
                />

                <Text style={styles.label}>Image URL:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Image URL"
                    value={imgUrl}
                    onChangeText={setImgUrl}
                />

                <View style={styles.buttonContainer}>
                    <Button title="Submit" onPress={handleSubmit} disabled={isSubmitting} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 20,
        color: '#333',
    },
    label: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginVertical: 12,
        fontSize: 16,
        backgroundColor: '#f7f7f7',
    },
    picker: {
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 12,
        backgroundColor: '#f7f7f7',
    },
    buttonContainer: {
        marginTop: 30,
        marginBottom: 20,
    },
});

export default Avtomobil;
