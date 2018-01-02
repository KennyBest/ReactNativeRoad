import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    AsyncStorage,

    StyleSheet
} from 'react-native';
import AsyncStorageUtil from "../Utils/AsyncStorageUtil";

export default class AsyncStorageExample extends Component {
    static navigationOptions = {
        headerTitle: 'AsyncStorge',
        tabBarVisible: false
    };

    state = {
        name: '',
        work: 'undefined'
    };

    _onPressSave = () => {
        this.saveItem('name', 'KennyBest');
    };

    _onPressFetch = () => {
        this.getItem('name');
    };

    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            alert(error.message);
        }
    }

    async getItem(key) {
        try {
            let value = await AsyncStorage.getItem(key);
            this.setState({
                name: value
            });
        } catch (error) {
            alert(error.message);
        }
    }

    _onClear = async () => {
        try {
           await AsyncStorage.clear();
        } catch (error) {
            alert('clear: ' + error.message);
        }
    };

    _onUtilSet = () => {
       AsyncStorageUtil.setItem('work', 'coder');
    };

    _onUtilGet = () => {
        AsyncStorageUtil.getItem('work', (ret) => {
            this.setState({
                work: ret
            });
        });
    };

    _onUtilRemove = () => {
        AsyncStorageUtil.removeItem('work');
        this._onUtilGet();
    };

    render() {
        let buttons = [
            {id:0, title: 'save', onPress: this._onPressSave},
            {id:1, title: 'fetch', onPress: this._onPressFetch},
            {id:2, title: 'clear', onPress: this._onClear},
            {id:3, title: 'Util_set', onPress: this._onUtilSet},
            {id:4, title: 'Util_get', onPress: this._onUtilGet},
            {id:5, title: 'Util_remove', onPress: this._onUtilRemove}
        ];
        return (
            <View style={styles.view}>
                <Text>Name: { this.state.name }</Text>
                <Text>Work: { this.state.work }</Text>
                {
                    buttons.map((item) => <Button key={item.id} title={item.title} onPress={item.onPress}/>)
                }
            </View>
        );
    }
}

let styles = StyleSheet.create({
    view: {
        flex: 1,
    }
});