import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers} from 'react-navigation';
import TabBarController from './class/TabBarController';

const TestNavigator = StackNavigator({
    Tab: {
        screen: TabBarController,
    }
});

export default TestNavigator;
