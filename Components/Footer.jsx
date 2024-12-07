import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

const Footer = () => {
    const navigation = useNavigation(); // Initialize the navigation hook
    const [activeIndex, setActiveIndex] = useState(null);

    const handlePress = (index, route) => {
        setActiveIndex(index);
        navigation.navigate(route); // Navigate to the selected route
    };

    const icons = [
        {
            uri: 'https://img.icons8.com/ios-filled/50/000000/home.png',
            text: 'Avtoelon.uz',
            route: 'Avtoelon', // Route for navigation
        },
        {
            uri: 'https://img.icons8.com/ios-filled/50/000000/like.png',
            text: 'Saqlangan',
            route: 'Saqlangan', // Route for navigation
        },
        {
            uri: 'https://img.icons8.com/ios-filled/50/0000FF/plus.png',
            text: 'Sotish',
            route: 'Sotish', // Route for navigation
            activeUri: 'https://img.icons8.com/ios-filled/50/0000FF/plus.png',
        },
        {
            uri: 'https://img.icons8.com/ios-filled/50/000000/chat.png',
            text: 'Chat',
            route: 'Chat', // Route for navigation
        },
        {
            uri: 'https://img.icons8.com/ios-filled/50/000000/user.png',
            text: 'Kabinet',
            route: 'Kabinet', // Route for navigation
        },
    ];

    return (
        <View style={styles.footerContainer}>
            {icons.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.navItem}
                    onPress={() => handlePress(index, item.route)} // Pass the route to handlePress
                >
                    <Image
                        source={{
                            uri: item.text === 'Sotish'
                                ? item.activeUri // "Sotish" icon always blue
                                : activeIndex === index
                                ? item.uri.replace('000000', '000000') // Active (black) icon
                                : item.uri.replace('000000', '808080'), // Default (gray) icon
                        }}
                        style={styles.icon}
                    />
                    <Text
                        style={[styles.navText, {
                            color: item.text === 'Sotish'
                                ? '#0000FF' // "Sotish" text always blue
                                : activeIndex === index
                                ? '#000' // Active text (black)
                                : '#808080', // Default text (gray)
                        }]}
                    >
                        {item.text}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // 'space-center' was incorrect, 'center' is correct
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingLeft: 10,
    },
    navItem: {
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginBottom: 5,
        marginHorizontal: 27,
    },
    navText: {
        fontSize: 12,
    },
});

export default Footer;
