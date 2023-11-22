import {View, Text, Image, Button, ScrollView} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Heading, Paragraph, LastText} from '../../../components/startText/Text';
import StartBtn from '../../../components/startBtn/StartBtn';

export default function Second() {
  return (
    <>
    
      <View style={{flex: 1}}>
      <View style={styles.header}></View>
      <View style={styles.container1}>
        <Image
          style={styles.img}
          source={require('../../../assets/intro2.png')}
        />
      </View>
      <View style={styles.container2}>
        <Heading title="Customize your High-end travel" />
        <Paragraph Text="Countless high-end entertainment facilities" />
        {/* Button Component */}
        <StartBtn />
      </View>
      <View style={styles.footer}>
      Last Text
        <LastText />
      </View>
      </View>
    </>
  );
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
  container2: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  footer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  img: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
