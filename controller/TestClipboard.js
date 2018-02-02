import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Clipboard,
    Dimensions
} from 'react-native';

export default class TestClipboard extends Component {
    static navigationOptions = {
        title: 'Clipboard'
    };

    state = {
        name: ''
    };
    _handleClipboardSet = () => {
        Clipboard.setString('hello world');
    };

    _handleClipboardget = async () => {
        let cnt = await Clipboard.getString();
        this.setState({
            name: cnt
        });
    };

    render() {
        return (
            <View>
                <Button title={'Clipboard set'} onPress={this._handleClipboardSet}/>
                <Button title={'Clipboard get'} onPress={this._handleClipboardget}/>
                <Text>{ this.state.name }</Text>
            </View>
        );
    }
}

/*
*  Dimensions 面积
*  获取window screen的宽高，
*  const { width, height } = Dimensions.get('window')
* */
