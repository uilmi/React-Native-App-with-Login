import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/core/theme';
import Button from './src/components/Button';
import TextInput from './src/components/TextInput';
import Header from './src/components/Header';

const Stack = createStackNavigator();


function Screen1({ navigation }) {
  console.log(navigation)
  return (
    <View style={styles.container}>
      <Header>Screen 1</Header>
      <Button
        onPress={() => {
          navigation.navigate('Screen2')
        }}
      >
        NEXT
      </Button>
    </View>
  )
}

function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Header>Screen 2</Header>
      <Button
        onPress={() => {
          navigation.goBack()
        }}
      >
        BACK
      </Button>
      <Button
        onPress={() => {
          navigation.replace('Screen3')
        }}
      >
        NEXT
      </Button>
    </View>
  )
}

function Screen3({ navigation }) {
  return (
    <View style={styles.container}>
      <Header>Screen 3</Header>
      <Button
        onPress={() => {
          navigation.navigate('Screen2')
        }}
      >
        BACK
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('Screen1')
        }}
      >
        NEXT
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('Screen1')
        }}
      >
        NEXT
      </Button>
    </View>
  )
}

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Screen1"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
