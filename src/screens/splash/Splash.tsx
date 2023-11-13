
import React from 'react'
import { Image } from 'react-native'
import { LinearGradient } from 'react-native-linear-gradient'
import { StyleSheet } from 'react-native'
import { Platform } from 'react-native'

export default function Splash() {
  return (
    <LinearGradient colors={['#66D2CC', '#3062F3']} style={styles.container}>
      <Image source={require('../../assets/logo.png')} />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: Platform.OS == 'ios' ? 20 : 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });