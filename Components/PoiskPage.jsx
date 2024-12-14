import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Switch,
    StyleSheet,
    Modal,
    FlatList,
} from 'react-native';

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

    const [viloyatModalVisible, setViloyatModalVisible] = useState(false);
    const [markaModalVisible, setMarkaModalVisible] = useState(false);
    const [search, setSearch] = useState('');
    const [markaSearch, setMarkaSearch] = useState('');

    const viloyatlar = [
        'Toshkent', 'Andijon', 'Buxoro', 'Farg‘ona', 'Jizzax',
        'Xorazm', 'Namangan', 'Navoiy', 'Qashqadaryo',
        'Qoraqalpog‘iston', 'Samarqand', 'Surxondaryo',
    ];

    const brands = [
        { name: 'Chevrolet Cobalt', icon: 'https://example.com/chevrolet-cobalt-icon.png' },
        { name: 'Chevrolet Spark', icon: 'https://example.com/chevrolet-spark-icon.png' },
        { name: 'Chevrolet Nexia 3', icon: 'https://example.com/chevrolet-nexia3-icon.png' },
        { name: 'Chevrolet Lacetti', icon: 'https://example.com/chevrolet-lacetti-icon.png' },
        { name: 'Chevrolet Damas', icon: 'https://example.com/chevrolet-damas-icon.png' },
        { name: 'Chevrolet Malibu', icon: 'https://example.com/chevrolet-malibu-icon.png' },
        { name: 'Chevrolet Tracker', icon: 'https://example.com/chevrolet-tracker-icon.png' },
        { name: 'Chevrolet Captiva', icon: 'https://example.com/chevrolet-captiva-icon.png' },
        { name: 'Chevrolet Epica', icon: 'https://example.com/chevrolet-epica-icon.png' },
        { name: 'Chevrolet Matiz', icon: 'https://example.com/chevrolet-matiz-icon.png' },
        { name: 'Chevrolet Orlando', icon: 'https://example.com/chevrolet-orlando-icon.png' },
        { name: 'Chevrolet Taho', icon: 'https://example.com/chevrolet-taho-icon.png' },
        { name: 'Matiz', icon: 'https://example.com/matiz-icon.png' }, // Uzbek brand
        { name: 'Nexia 3', icon: 'https://example.com/nexia3-icon.png' }, // Uzbek brand
        { name: 'Spark', icon: 'https://example.com/spark-icon.png' }, // Uzbek brand
        { name: 'Damas', icon: 'https://example.com/damas-icon.png' }, // Uzbek brand
        { name: 'Cobalt', icon: 'https://example.com/cobalt-icon.png' }, // Uzbek brand
        { name: 'Lacetti', icon: 'https://example.com/lacetti-icon.png' }, // Uzbek brand
        { name: 'Tracker', icon: 'https://example.com/tracker-icon.png' }, // Uzbek brand
        { name: 'Orlando', icon: 'https://example.com/orlando-icon.png' }, // Uzbek brand
        { name: 'Taho', icon: 'https://example.com/taho-icon.png' }, // Uzbek brand
        { name: 'Lada Granta', icon: 'https://example.com/lada-granta-icon.png' }, // Russian
        { name: 'Lada Vesta', icon: 'https://example.com/lada-vesta-icon.png' }, // Russian
        { name: 'Renault Duster', icon: 'https://example.com/renault-duster-icon.png' }, // French
        { name: 'Volkswagen Golf', icon: 'https://example.com/volkswagen-golf-icon.png' }, // German
        { name: 'Toyota Corolla', icon: 'https://example.com/toyota-corolla-icon.png' }, // Japanese
        { name: 'Honda Civic', icon: 'https://example.com/honda-civic-icon.png' }, // Japanese
        { name: 'Nissan Altima', icon: 'https://example.com/nissan-altima-icon.png' }, // Japanese
        { name: 'BMW 3 Series', icon: 'https://example.com/bmw-3-series-icon.png' }, // German
        { name: 'Audi A4', icon: 'https://example.com/audi-a4-icon.png' }, // German
        { name: 'Ford Focus', icon: 'https://example.com/ford-focus-icon.png' }, // American
        { name: 'Chevrolet Silverado', icon: 'https://example.com/chevrolet-silverado-icon.png' }, // American
        { name: 'Peugeot 208', icon: 'https://example.com/peugeot-208-icon.png' }, // French

        { name: 'Mazda 3', icon: 'https://example.com/mazda-3-icon.png' }, // Japanese
        { name: 'Kia Optima', icon: 'https://example.com/kia-optima-icon.png' }, // Korean
        { name: 'Hyundai Sonata', icon: 'https://example.com/hyundai-sonata-icon.png' }, // Korean
        { name: 'Fiat 500', icon: 'https://example.com/fiat-500-icon.png' }, // Italian
        { name: 'Mercedes-Benz C-Class', icon: 'https://example.com/mercedes-benz-c-class-icon.png' }, // German
        { name: 'Subaru Impreza', icon: 'https://example.com/subaru-impreza-icon.png' }, // Japanese
        { name: 'Volvo S60', icon: 'https://example.com/volvo-s60-icon.png' }, // Swedish
        { name: 'Citroen C3', icon: 'https://example.com/citroen-c3-icon.png' }, // French
    ];


    const filteredViloyatlar = viloyatlar.filter((viloyat) =>
        viloyat.toLowerCase().includes(search.toLowerCase())
    );

    const filteredBrands = brands.filter((brand) =>
        brand.name.toLowerCase().includes(markaSearch.toLowerCase())
    );

    const resetFilters = () => {
        setFilters({
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
        setSearch('');
        setMarkaSearch('');
    };

    const handleToggle = (key) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [key]: !prevFilters[key],
        }));
    };

    const handleViloyatSelect = (viloyat) => {
        setFilters({ ...filters, viloyat });
        setViloyatModalVisible(false);
    };

    const handleMarkaSelect = (marka) => {
        setFilters({ ...filters, markaModel: marka });
        setMarkaModalVisible(false);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Poisk</Text>
                <TouchableOpacity onPress={resetFilters}>
                    <Text style={styles.clearText}>Tozalash</Text>
                </TouchableOpacity>
            </View>


            {/* Filters */}
            <View style={styles.filterGroup}>
                <TouchableOpacity
                    style={styles.filterRow}
                    onPress={() => setViloyatModalVisible(true)}
                >
                    <Text>Viloyat</Text>
                    <Text style={styles.selectText}>
                        {filters.viloyat || 'Tanlash'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.filterRow}
                    onPress={() => setMarkaModalVisible(true)}
                >
                    <Text>Marka, model</Text>
                    <Text style={styles.selectText}>
                        {filters.markaModel || 'Tanlash'}
                    </Text>
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
                    <Text style={styles.currencyText}>yildan gacha</Text>
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


            {/* Viloyat Modal */}
            <Modal
                visible={viloyatModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setViloyatModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeader}>Viloyatni tanlang</Text>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Viloyatni qidiring"
                            value={search}
                            onChangeText={(text) => setSearch(text)}
                        />
                        <FlatList
                            data={filteredViloyatlar}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.viloyatItem}
                                    onPress={() => handleViloyatSelect(item)}
                                >
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity
                            style={styles.modalCloseButton}
                            onPress={() => setViloyatModalVisible(false)}
                        >
                            <Text style={styles.modalCloseText}>Yopish</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.additionalParams}>
                <Text style={styles.parametrlar}>Qo'shimcha parametrlarni ko'rsatish</Text>
            </TouchableOpacity>

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>E'lon ko'rsatish</Text>
            </TouchableOpacity>

            {/* Marka Modal */}
            <Modal
                visible={markaModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setMarkaModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeader}>Marka va modelni tanlang</Text>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Marka va modelni qidiring"
                            value={markaSearch}
                            onChangeText={(text) => setMarkaSearch(text)}
                        />
                        <FlatList
                            data={filteredBrands}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.viloyatItem}
                                    onPress={() => handleMarkaSelect(item.name)}
                                >
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity
                            style={styles.modalCloseButton}
                            onPress={() => setMarkaModalVisible(false)}
                        >
                            <Text style={styles.modalCloseText}>Yopish</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'#ffffff',
        paddingHorizontal: 20,
        marginTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginTop: -30,
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
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    modalHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    viloyatItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    brandItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    brandIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    modalCloseButton: {
        marginTop: 10,
        backgroundColor: '#007bff',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    modalCloseText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    filterGroup: {
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingBottom: 10,
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
        marginLeft: -200,
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
    parametrlar: {
        color: '#007bff',
        fontSize: 17,
    }
});

export default PoiskPage;
