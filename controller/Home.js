import React, { Component } from 'react';
import { Text, View, StyleSheet } from  'react-native';

export default class Home extends Component<{}> {
    render() {
        return (
            <View style={styles.view}>
                <Text>Home</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        flex: 1
    }
});