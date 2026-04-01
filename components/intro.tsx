import React, { useState } from 'react';
import { Image, StyleSheet, Switch, Text, View } from 'react-native';

import { useAuth } from '../services/AuthProvider';
import { Colors } from '../services/Colors';

type IntroProps = {
    overrideName?: string;
};

export default function Intro({ overrideName }: IntroProps) {
    const { user } = useAuth();

    const nameSource = overrideName || user?.displayName || user?.email || 'User';
    const initial = nameSource.trim().charAt(0).toUpperCase();
    const displayName = nameSource.trim();
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.row}>
                <View style={styles.avatarWrapper}>
                    {user?.photoURL ? (
                        <Image source={{ uri: user?.photoURL }} style={styles.image} />
                    ) : (
                        <View style={[styles.image, styles.fallbackAvatar]}>
                            <Text style={styles.fallbackInitial}>{initial}</Text>
                        </View>
                    )}
                </View>
                <Text style={styles.name} numberOfLines={1}>
                    Hello , {displayName}
                </Text>
                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>{isEnabled ? 'Veg' : 'Non-Veg'}</Text>
                    <Switch value={isEnabled} onValueChange={() => setIsEnabled(!isEnabled)} />
                </View>
            </View>
        </View>
    );
}

const SPACING = 12;

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        marginTop: 30,
        backgroundColor: Colors.White,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        minWidth: 0,
    },
    avatarWrapper: {
        width: 45,
        height: 45,
        borderRadius: 22,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 22,
    },
    fallbackAvatar: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fallbackInitial: {
        fontFamily: 'Outfit-bold',
        fontSize: 20,
        color: Colors.White,
        textAlign: 'center',
    },
    name: {
        flex: 1,
        flexShrink: 1,
        minWidth: 0,
        marginLeft: SPACING,
        fontFamily: 'Outfit-bold',
        fontSize: 20,
        color: Colors.Black,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexShrink: 0,
        marginLeft: SPACING,
    },
    switchLabel: {
        marginRight: 6,
        fontFamily: 'Outfit-bold',
        fontSize: 14,
        color: Colors.Black,
    },
});
