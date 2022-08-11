import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Stack, { Menu } from "./src/Screen/Menu";
import { MainApp } from "./src/Screen/MainApp";


const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu" screenOptions={{headerShown: false}}>
        <Stack.Screen 
        name='Menu' 
        component={Menu}
        options={{ title: 'Main Menu'}}/>
        <Stack.Screen name='MainApp' component={MainApp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;