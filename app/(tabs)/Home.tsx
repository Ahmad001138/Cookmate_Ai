import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import CreateRecipeGen from '@/components/CreateRecipeGen';
import Intro from '../../components/intro';
import { Colors } from '../../services/Colors';

export default function HomeTab() {
    const params = useLocalSearchParams<{ email?: string }>();
    const email = (params.email as string) || '';
    const derivedName = email ? email.split('@')[0] : undefined;

    return (
        <ScrollView style={styles.container}>
            <Intro overrideName={derivedName} />
            <CreateRecipeGen />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.White,
        padding: 25,
    },
});

