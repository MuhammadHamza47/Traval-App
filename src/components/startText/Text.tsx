import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

export const Heading = props => {
  return (
    <View>
      <Text style={styles.heading}>{props.title}</Text>
    </View>
  );
};

export const Paragraph = props => {
    return(
        <View >
            <Text style={styles.text}>{props.Text}</Text>
        </View>
    );
};

export const LastText = () => {
    return(
        <View style={styles.footer}>
            <View>
                <Image source={require('../../assets/Zaps.png')} />
            </View>
            <Text>Nordic Vacation Sponcor</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    heading: {
      textAlign: 'center',
      fontSize: 28,
      marginTop: 20,
      paddingHorizontal: 20,
      fontWeight: '600',
      color: 'black',
      lineHeight: 42,
    },
    text: {
      fontSize: 18,
      marginTop: 10,
      fontWeight: '400',
      textAlign: 'center',
      paddingHorizontal: 27,
      lineHeight: 27,
      color: 'rgba(180, 180, 180, 1)',
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
  