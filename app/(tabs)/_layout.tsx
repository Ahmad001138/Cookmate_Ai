import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../services/Colors'

const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary,
      headerShown: false,
    }}>
      <Tabs.Screen
        name='Home'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
          title: 'Home'
        }}
      />
      <Tabs.Screen
        name='Explore'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
          title: 'Explore'
        }}
      />
      <Tabs.Screen
        name='Cookbook'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="book" size={size} color={color} />,
          title: 'Cookbook'
        }}
      />
      <Tabs.Screen
        name='Profile'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
          title: 'Profile'
        }}
      />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({

})