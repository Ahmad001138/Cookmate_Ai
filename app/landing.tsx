import { Marquee } from '@animatereactnative/marquee';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../services/Colors';



export default function Landing() {
    const router = useRouter();

    const imagelist = [
        require('../assets/images/1.jpg'),
        require('../assets/images/c1.jpg'),
        require('../assets/images/2.jpg'),
        require('../assets/images/c2.jpg'),
        require('../assets/images/3.jpg'),
        require('../assets/images/c3.jpg'),
        require('../assets/images/4.jpg'),
        require('../assets/images/5.jpg'),
        require('../assets/images/6.jpg'),
    ];

    const handleGetStarted = () => {
        router.push('/(tabs)/Home');
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.marqueeWrapper}>
                        {[0.7, 0.4, 0.5].map((speed, i) => (
                            <Marquee key={i} spacing={10} speed={speed} style={styles.marqueeContainer}>
                                <View style={styles.imageRow}>
                                    {imagelist.map((image, index) => (
                                        <Image key={index} source={image} style={styles.image} />
                                    ))}
                                </View>
                            </Marquee>
                        ))}
                    </View>

                    <View style={styles.contentSection}>
                        <Text style={styles.title}>Cook AI | Find, Create and Enjoy Delicious Recipes!</Text>
                        <Text style={styles.subtitle}>
                            Generate delicious recipes in seconds with the power of AI...
                        </Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleGetStarted}
                        >
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    scrollContent: {
        flexGrow: 1,
    },
    marqueeWrapper: {
        height: 460,
        justifyContent: 'center',
    },
    marqueeContainer: {
        transform: [{ rotate: '-4deg' }],
        marginVertical: 5,
    },
    imageRow: {
        flexDirection: 'row',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 24,
        marginHorizontal: 4,
    },
    contentSection: {
        padding: 24,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Outfit-bold',
        fontSize: 30,
        textAlign: 'center',
        color: Colors.Black,
        marginBottom: 12,
    },
    subtitle: {
        fontFamily: 'Outfit',
        textAlign: 'center',
        fontSize: 18,
        color: Colors.Gray,
        lineHeight: 26,
        marginTop: 10,
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 18,
        width: '100%',
        alignItems: 'center',
        elevation: 4,
        shadowColor: Colors.Black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        fontFamily: 'Outfit-bold',
        color: Colors.White,
        fontSize: 20,
    },
});
