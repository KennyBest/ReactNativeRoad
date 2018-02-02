/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './controller/Home';
import MineController from './controller/Me';
export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'me',
            meTabBarVisible: true,
            title: 'llj'
        };
    }

    changeTabBar(isShow: boolean) {
      // 这里通过screenProps在嵌套导航界面中调用拿到的this不是当前组件
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
        let AppTabNavigator = TabNavigator({
            KHome: {
                screen: Home,
                navigationOptions: {
                    title: '首页',
                    tabBarIcon: ({focused, tintColor}) => {
                        if (focused === true) {
                            return  <Image source={ require('./images/home_selected.png')} />;
                        }  else {
                            return  <Image source={ require('./images/home.png')} />;
                        }
                    }
                }
            },
            KMe: {
                screen: MineController,
                navigationOptions: (navigation) => ({
                    title: '我的',
                    tabBarIcon: ({focused, tintColor}) => {
                        if (focused === true) {
                            return  <Image source={ require('./images/me_selected.png')} />;
                        }  else {
                            return  <Image source={ require('./images/me.png')} />;
                        }
                    },
                    tabBarVisible:this.state.meTabBarVisible,
                }),
            }
        });
        return (
           <AppTabNavigator screenProps={{handleTabBar: this.changeTabBar}}/>
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


