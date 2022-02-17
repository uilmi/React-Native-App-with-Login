import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/core/theme';
import Button from './src/components/Button';
import TextInput from './src/components/TextInput';
import Header from './src/components/Header';
import { StartScreen } from './src/screens';

const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


