import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from "./pages/Main";
import About from "./pages/About";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
          },
        }}
        initialRouteName="Main">
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="About" component={About}/>
      </Stack.Navigator>
    </NavigationContainer>;
  }
}

