import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from  'react-native';

export default class TestLayout extends Component {
    static navigationOptions = {
        headerTitle: 'Layout Prop'
    };
    render() {
        return (
            <View style={styles.containerView}>
                <View style={styles.hView}>
                    <View style={styles.redView}>

                    </View>
                    <View style={styles.blueView}>

                    </View>
                    <View style={styles.yellowView}>

                    </View>
                </View>
                <View style={styles.redView}>

                </View>
                <View style={[styles.blueView, styles.blue2]}>
                    <View style={styles.white}>

                    </View>
                </View>
                <View style={styles.yellowView}>

                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    containerView: {
        flex: 1
    },
    hView: {
        left: 10,
        right: 10,
        height: 100,
        flexDirection: 'row',
    },
    redView: {
        backgroundColor: 'red',
        flex: 1,
    },
    yellowView: {
        backgroundColor: 'yellow',
        flex: 1,
    },
    blueView: {
        backgroundColor: 'blue',
        flex: 1,
    },
    blue2: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    white: {
        marginTop: 10,
        marginBottom: 10,
        height: 100,
        width: 100,
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        opacity: 0.5,
    }
});
