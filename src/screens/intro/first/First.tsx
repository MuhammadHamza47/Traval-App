import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Heading, Paragraph, LastText } from '../../../components/startText/Text'
import StartBtn from '../../../components/startBtn/StartBtn'

export default function First() {
  return (
    < >
    <View style={{flex:1}}>
    <View style={styles.header} ></View>
    <View style={styles.container1} >
        <Image style={styles.img} source={require('../../../assets/intro1.png')} />
    </View>
    <View style={styles.container2} >
        <Heading title="Make your own private travel plan"/>
        <Paragraph Text="Formulate your strategy to receive wonderful gift packs" />
        <StartBtn />
    </View>
    <View style={styles.footer} >
        {/* <Text style={{marginTop: 40}}>Nordic Vacation Sponsor</Text> */}
        <LastText />
    </View>
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
    

})