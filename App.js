/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './controller/Home';
import MeNavigator from './controller/Me';

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title={'Home'}
                    renderIcon={() => <Image resizeMode={'contain'} source={require('./images/home.png')}/>}
                    renderSelectedIcon={() => <Image resizeMode={'contain'} source={require('./images/home_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'me'}
                    title={'Me'}
                    renderIcon={() => <Image source={require('./images/me.png')}/>}
                    renderSelectedIcon={() => <Image source={require('./images/me_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: 'me'})}>
                    <MeNavigator />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
