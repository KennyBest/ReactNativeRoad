/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';
import TestNavigator from "./TestNavigator";

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'me'
        };
    }

    state = {
        tabBarHeight: 49
    };

    changeTabBarHeight(isShow) {
        this.setState({
            tabBarHeight: isShow ? 49 : 0
        });
    }

    renderTabBarItem(name: string, title: string, imageName: string, selectedImageName: string, component: Component) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === name}
                title={title}
                renderIcon={() => <Image resizeMode={'contain'} source={imageName}/>}
                renderSelectedIcon={() => <Image resizeMode={'contain'} source={selectedImageName}/>}
                onPress={() => this.setState({
                    selectedTab: name
                })}
            >
                {component}
            </TabNavigator.Item>
        );
    }

    render() {
        const navigator = TestNavigator;
        return (
            <TestNavigator
            />
        );
    }
}

/*
*  render() {
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
    }*/


