import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    AsyncStorage,

    StyleSheet
} from 'react-native';

export default class AsyncStorageExample extends Component {
    static navigationOptions = {
        headerTitle: 'AsyncStorge'
    };

    state = {
        name: ''
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

    render() {
        let buttons = [
            {id:0, title: 'save', onPress: this._onPressSave},
            {id:1, title: 'fetch', onPress: this._onPressFetch},
            {id:2, title: 'clear', onPress: this._onClear}
        ];
        return (
            <View style={styles.view}>
                <Text>Name: { this.state.name }</Text>
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