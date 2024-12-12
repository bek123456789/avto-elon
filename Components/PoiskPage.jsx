import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet } from 'react-native';

const PoiskPage = () => {
    const [filters, setFilters] = useState({
        viloyat: '',
        markaModel: '',
        yilDan: '',
        yilGacha: '',
        narxDan: '',
        narxGacha: '',
        arenda: false,
        bozorda: false,
        zorNarx: false,
        avtosalon: false,
    });

    const handleToggle = (key) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [key]: !prevFilters[key],
        }));
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Poisk</Text>
                <TouchableOpacity>
                    <Text style={styles.clearText}>Tozalash</Text>
                </TouchableOpacity>
            </View>

            {/* Filters */}
            <View style={styles.filterGroup}>
                <TouchableOpacity style={styles.filterRow}>
                    <Text>Viloyat</Text>
                    <Text style={styles.selectText}>Tanlash</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterRow}>
                    <Text>Marka, model</Text>
                    <Text style={styles.selectText}>Tanlash</Text>
                </TouchableOpacity>
            </View>

            {/* Year and Price Inputs */}
            <View style={styles.filterGroup}>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        placeholder="dan"
                        value={filters.yilDan}
                        onChangeText={(text) =>
                            setFilters({ ...filters, yilDan: text })
                        }
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="gacha"
                        value={filters.yilGacha}
                        onChangeText={(text) =>
                            setFilters({ ...filters, yilGacha: text })
                        }
                    />
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        placeholder="dan"
                        value={filters.narxDan}
                        onChangeText={(text) =>
                            setFilters({ ...filters, narxDan: text })
                        }
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="gacha"
                        value={filters.narxGacha}
                        onChangeText={(text) =>
                            setFilters({ ...filters, narxGacha: text })
                        }
                    />
                    <Text style={styles.currencyText}>so'm y.e</Text>
                </View>
            </View>

            {/* Toggles */}
            <View style={styles.filterGroup}>
                {[
                    { label: 'Arenda s vykupom', key: 'arenda' },
                    { label: 'Bozorda', key: 'bozorda', newTag: true },
                    { label: "Zo'r narx", key: 'zorNarx' },
                    { label: 'Avtosalon', key: 'avtosalon' },
                ].map(({ label, key, newTag }) => (
                    <View style={styles.toggleRow} key={key}>
                        <Text>{label}</Text>
                        {newTag && <Text style={styles.newTag}>NEW</Text>}
                        <Switch
                            value={filters[key]}
                            onValueChange={() => handleToggle(key)}
                        />
                    </View>
                ))}
            </View>

            {/* Additional Parameters */}
            <TouchableOpacity style={styles.additionalParams}>
                <Text>Qo'shimcha parametrlarni ko'rsatish</Text>
            </TouchableOpacity>

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>E'lon ko'rsatish</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    clearText: {
        color: '#007bff',
    },
    filterGroup: {
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingBottom: 10,
    },
    filterRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    selectText: {
        color: '#007bff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 5,
        padding: 10,
        flex: 1,
        marginRight: 10,
    },
    currencyText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    toggleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    newTag: {
        backgroundColor: '#ff0000',
        color: '#fff',
        fontSize: 12,
        paddingHorizontal: 5,
        borderRadius: 3,
        marginLeft: 5,
    },
    additionalParams: {
        marginVertical: 10,
    },
    submitButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 90,
    },
    submitText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PoiskPage;

