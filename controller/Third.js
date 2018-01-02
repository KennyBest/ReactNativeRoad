import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

 class ThirdExample extends Component {
    static navigationOptions = {
        tabBarVisible: false,
        title: 'Third'
    };

    render() {
        return (
            <View style={styles.view}>
                <Text>Third</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center'
    }
});

