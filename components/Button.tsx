import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../services/Colors'

export default function Button({ label, onPress, icon }: { label?: string, onPress?: () => void, icon?: keyof typeof Ionicons.glyphMap }) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
            {icon && <Ionicons name={icon} size={24} color={Colors.White} />}
            <Text style={styles.buttonText}>{label || 'Get Started'}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 18,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: Colors.Black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    buttonText: {
        color: Colors.White,
        fontSize: 20,
        fontFamily: 'Outfit-bold',
    },
})