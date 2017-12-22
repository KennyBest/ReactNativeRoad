import React, {Component } from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    MaskedViewIOS
} from 'react-native';

export default class TestMaskView extends Component {
    static navigationOptions = {
        headerTitle: 'MaskedViewIOS'
    };

    render() {
        return (
            <View style={styles.view}>
                <MaskedViewIOS
                    style={{
                        flex: 1,
                    }}
                    maskElement={
                        <View style={styles.maskContainerStyle}>
                            <Text style={styles.textStyle}>Basic Mask</Text>
                        </View>
                    }
                >
                </MaskedViewIOS>
                <View style={{flex: 1, backgroundColor: 'orange'}} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    maskContainerStyle: {
        alignContent: 'center',
        height: 100,
        width: 100
    },
    textStyle: {
        color: 'red'
    }
});

/*
*  问题：---
*  MaskedViewIOS 显示不出来maskElement
* */