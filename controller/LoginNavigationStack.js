import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from "./Login";

const  routeConfigs = {
    Login: { screen: LoginScreen }
};

const stackNavigatorConfigs = {
    initialRouteName: 'Login'
};

const LoginStack = StackNavigator(routeConfigs);
export default LoginStack;