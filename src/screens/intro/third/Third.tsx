import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Heading, Paragraph, LastText } from '../../../components/startText/Text'
import StartBtn from '../../../components/startBtn/StartBtn'

export default function Third() {
  return (
    < >
    <View style={styles.header} ></View>
    <View style={styles.container1} >
        <Image style={styles.img} source={require('../../../assets/intro3.png')} />
    </View>
    <View style={styles.container2} >
        <Heading title="High-end leisure projects to choose from"/>
        <Paragraph Text="The world's first-class modern leisure and entertainment method" />
        <StartBtn />
    </View>
    <View style={styles.footer} >
        <LastText />
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
        width: 300,
        height: 300,
        resizeMode: 'contain'
    }
})