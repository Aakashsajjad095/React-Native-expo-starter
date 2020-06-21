import React, { Component } from 'react';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Camera from './Screens/Camera';
import ViewImage from './Screens/ViewImage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();

export default class App extends Component {
createHomeStack = () =>
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
        }}
    >
        <Stack.Screen
            name="Login"
            component={Login}
            options={{
                title: "Log In",
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white"
            }}

        />

        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                title: "Home",
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white"
            }}

        />
        <Stack.Screen
            name="Camera"
            component={Camera}
            options={{
                title: "Camera",
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white"
            }}

        />
        <Stack.Screen
            name="ViewImage"
            component={ViewImage}
            options={{
                title: "View Image",
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white"
            }}

        />

    </Stack.Navigator>


render() {
    return (
        <NavigationContainer>
            {this.createHomeStack()}
        </NavigationContainer>
    );
}
}
