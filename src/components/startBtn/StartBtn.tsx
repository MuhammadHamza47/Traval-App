import React from 'react'
import { StyleSheet, TouchableOpacity, Image  } from 'react-native'

export default function StartBtn(props: any) {
  return (
    <TouchableOpacity onPress={props.onpress} style={styles.buttonContainer}>
      <Image source={require('../../../assets/startbtn.png')} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
    height: 55,
    width: 55,
    justifyContent: 'center',
    backgroundColor: 'rgba(3, 115, 243, 1)',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
});