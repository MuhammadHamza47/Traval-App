import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from '../screens/intro/first/First';
import Second from '../screens/intro/second/Second';
import Third from '../screens/intro/third/Third'; 

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}