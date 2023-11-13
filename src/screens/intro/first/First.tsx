import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function First() {
  return (
    < >
    <View style={styles.header} ></View>
    <View style={styles.container1} >
        <Image style={styles.img} source={require('../../../assets/intro1.png')} />
    </View>
    <View style={styles.container2} >
        <Text style={styles.title}>Make your own private travel plan</Text>
        <Text style={styles.desc}>Formulate your strategy to receive wonderful gift packs</Text>
        <Button  title="Next" color="#0373F3"  />
    </View>
    <View style={styles.footer} >
        <Text style={{marginTop: 40}}>Nordic Vacation Sponsor</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'white',
  },
    container1: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    container2:{
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    footer:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    img:{   
        width: 350,
        height: 350,
        resizeMode: 'contain'
    },
    title:{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '600',
        color: '#000000',
        paddingHorizontal: 15
    },
    desc:{
        fontSize: 20,
        textAlign: 'center',
        padding: 15,
        marginBottom: 20
    },

})