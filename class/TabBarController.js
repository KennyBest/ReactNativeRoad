import React, { Component } from 'react';
import { Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../controller/Home';
import PersonSetting from "../controller/PersonSetting";
import Me from "../controller/Me";

export default class TabBarController extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Me',
            title: 'Me'
        };
    }

    _onPress = (item) => {
        this.setState({
            selectedTab: item
        });
    };

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Home'}
                    title={'Home'}
                    renderIcon={() => <Image resizeMode={'contain'} source={require('../images/home.png')}/>}
                    renderSelectedIcon={() => <Image resizeMode={'contain'} source={require('../images/home_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: 'Home'})}>
                    <Home />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Me'}
                    title={'Me'}
                    renderIcon={() => <Image source={require('../images/me.png')}/>}
                    renderSelectedIcon={() => <Image source={require('../images/me_selected.png')}/>}
                    onPress={() => this.setState({selectedTab: 'Me'})}>
                    <Me navigator={this.props.screenProps.navigator} />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
