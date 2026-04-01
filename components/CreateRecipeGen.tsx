import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../services/Colors'
import Button from './Button'

const CreateRecipeGen = () => {
  const [value, setValue] = useState<string>('')
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/images/pan.gif')}
        style={styles.panimage}
      />
      <Text style={styles.text}>Warm up your stove, and let's get cooking!</Text>
      <Text style={styles.subtext}>Make something for your LOVE</Text>
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={4}
        placeholder='What you want to create ? Add ingredients etc..'
        placeholderTextColor={Colors.Gray}
        onChangeText={(value) => setValue(value)}
      />
      <Button
        label={'Generate Recipe'}
        icon={'sparkles'}

      />
    </View>
  )
}

export default CreateRecipeGen

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: Colors.Secondary,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
  },
  panimage: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'outfit',
    color: Colors.Black,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtext: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: Colors.Black,
    textAlign: 'center',
    marginBottom: 20,

  },
  input: {
    width: '90%',
    height: 120,
    backgroundColor: Colors.White,
    borderRadius: 15,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 15,
    fontSize: 14,
    color: Colors.Black,
  }
})